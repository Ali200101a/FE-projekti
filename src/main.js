// الحصول على عناصر حاسبة BMI إذا كانت موجودة في الصفحة
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const button = document.querySelector('#calcBtn');
const result = document.querySelector('#result');

// منطق حساب BMI (يعمل فقط إذا كان الزر موجودًا)
if (button) {
  button.addEventListener('click', () => {
    // الحصول على قيم إدخال المستخدم
    const heightCm = Number(heightInput.value);
    const weightKg = Number(weightInput.value);

    // التحقق من صحة المدخلات
    if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
      result.textContent = 'Please enter valid height and weight.';
      return;
    }

    // حساب BMI: الوزن / (الطول بالمتر)²
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    // عرض النتيجة
    result.textContent = `Your BMI is ${bmi.toFixed(1)}`;
  });
}

// الحصول على عناصر نموذج التسجيل إذا كانت موجودة
const registerForm = document.querySelector('#register-form');
const registerMessage = document.querySelector('#register-message');

// منطق تسجيل المستخدم (يعمل فقط إذا كان النموذج موجودًا)
if (registerForm) {
  registerForm.addEventListener('submit', function(event) {
    // منع إعادة تحميل الصفحة عند إرسال النموذج
    event.preventDefault();
    
    // الحصول على قيم النموذج
    const username = document.querySelector('#reg-username').value;
    const email = document.querySelector('#reg-email').value;
    const password = document.querySelector('#reg-password').value;
    
    // إرسال طلب POST إلى الـ backend لتسجيل مستخدم جديد
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
      // تحليل الاستجابة مع الاحتفاظ بكود الحالة
      .then(res => res.json().then(data => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        console.log('Register response:', data);
        if (ok) {
          // عرض رسالة النجاح ومسح النموذج
          registerMessage.textContent = 'Registration successful!';
          registerMessage.style.color = 'green';
          registerForm.reset();
        } else {
          // عرض رسالة الخطأ من الـ backend
          registerMessage.textContent = 'Registration failed: ' + (data.message || data.error || 'Unknown error');
          registerMessage.style.color = 'red';
        }
      })
      .catch(err => {
        // معالجة أخطاء الشبكة
        console.error('Register error:', err);
        registerMessage.textContent = 'Registration failed: ' + err.message;
        registerMessage.style.color = 'red';
      });
  });
}

// Login logic
const loginBtn = document.querySelector('#login-btn');
const loginMessage = document.querySelector('#login-message');

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const username = document.querySelector('#login-username').value;
    const password = document.querySelector('#login-password').value;

    if (username === 'testuser' && password === 'test123') {
      loginMessage.textContent = 'Login successful';
      loginMessage.style.color = 'green';
    } else {
      loginMessage.textContent = 'Invalid username or password';
      loginMessage.style.color = 'red';
    }
  });
}
