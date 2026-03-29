// نقطة نهاية API للمستخدمين - يتم توجيهها عبر بروكسي Vite
const apiUrl = '/api/users';

// إنشاء عنصر DOM لكل مستخدم مع أزرار التعديل والحذف
function createUserElement(user) {
  const div = document.createElement('div');
  div.className = 'user-item';
  
  // تعيين HTML الداخلي لعرض معلومات المستخدم وأزرار الإجراءات
  div.innerHTML = `
    <span class="user-name">${user.username} (${user.email})</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  // ربط معالج النقر بزر التعديل
  div.querySelector('.edit-btn').onclick = function() {
    const newUsername = prompt('Edit username:', user.username);
    // إرسال طلب التحديث إذا تغير اسم المستخدم
    if (newUsername && newUsername !== user.username) {
      editUser(user.id, { username: newUsername });
    }
  };

  // ربط معالج النقر بزر الحذف مع التأكيد
  div.querySelector('.delete-btn').onclick = function() {
    if (confirm('Delete user?')) {
      deleteUser(user.id);
    }
  };

  return div;
}

// تحديث DOM بقائمة المستخدمين المستلمة من الـ backend
function renderUsers(users) {
  const list = document.getElementById('user-list');
  list.innerHTML = '';
  
  if (!users || users.length === 0) {
    list.innerHTML = '<p>No users found</p>';
    return;
  }
  
  // المرور عبر المستخدمين وإنشاء عنصر DOM لكل واحد
  users.forEach(user => {
    list.appendChild(createUserElement(user));
  });
}

// إرسال طلب GET إلى الـ backend لتحميل جميع المستخدمين
function fetchUsers() {
  console.log('Fetching users from:', apiUrl);
  
  fetch(apiUrl)
    .then(res => {
      console.log('Response status:', res.status);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      // تحليل استجابة JSON من الـ backend
      return res.json();
    })
    .then(users => {
      console.log('Users:', users);
      // عرض المستخدمين في واجهة المستخدم
      renderUsers(users);
    })
    .catch(err => {
      // عرض رسالة خطأ إذا فشل الجلب
      console.error('Fetch error:', err);
      alert('Failed to load users: ' + err.message);
    });
}

// إرسال طلب PUT إلى الـ backend لتحديث بيانات المستخدم
function editUser(id, data) {
  fetch(apiUrl + '/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => {
      console.log('Edit response:', res.status);
      // إعادة تحميل قائمة المستخدمين إذا نجح التحديث
      if (res.ok) fetchUsers();
      else alert('Edit failed: HTTP ' + res.status);
    })
    .catch(err => console.error('Edit error:', err));
}

// إرسال طلب DELETE إلى الـ backend لحذف المستخدم
function deleteUser(id) {
  fetch(apiUrl + '/' + id, { method: 'DELETE' })
    .then(res => {
      console.log('Delete response:', res.status);
      // إعادة تحميل قائمة المستخدمين إذا نجح الحذف
      if (res.ok) fetchUsers();
      else alert('Delete failed: HTTP ' + res.status);
    })
    .catch(err => console.error('Delete error:', err));
}

// إرسال طلب POST إلى الـ backend لإنشاء مستخدم جديد
function addUser(userData) {
  console.log('Adding user:', userData);
  
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  })
    .then(res => {
      console.log('Add response:', res.status);
      // تحليل الاستجابة والاحتفاظ بالحالة لمعالجة الأخطاء
      return res.json().then(data => ({ ok: res.ok, data }));
    })
    .then(({ ok, data }) => {
      console.log('Backend response:', data);
      if (ok) {
        // عرض النجاح وإعادة تحميل قائمة المستخدمين
        alert('User added!');
        fetchUsers();
      } else {
        // عرض رسالة الخطأ من الـ backend
        alert('Add failed: ' + (data.message || data.error || JSON.stringify(data)));
      }
    })
    .catch(err => console.error('Add error:', err));
}

// ربط معالج النقر بزر تحميل المستخدمين
document.getElementById('load-users').onclick = fetchUsers;

// معالجة إرسال النموذج لإضافة مستخدم جديد
document.getElementById('add-user-form').addEventListener('submit', function(event) {
  // منع إرسال النموذج الافتراضي الذي سيعيد تحميل الصفحة
  event.preventDefault();
  
  // الحصول على قيم حقول النموذج
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // إرسال البيانات إلى الـ backend
  addUser({ username, email, password });
  
  // مسح حقول النموذج بعد الإرسال
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
});
