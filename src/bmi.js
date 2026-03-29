// الحصول على مراجع لعناصر DOM الخاصة بحاسبة BMI
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const button = document.querySelector('#calcBtn');
const resultContainer = document.querySelector('#result-container');
const resultValue = document.querySelector('#result-value');

// الاستماع لنقر الزر لحساب BMI
button.addEventListener('click', () => {
  // الحصول على قيم الإدخال من حقول النموذج
  const heightCm = Number(heightInput.value);
  const weightKg = Number(weightInput.value);

  // التحقق من صحة الإدخال - التأكد من أن القيم أرقام صحيحة
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
    alert('Please enter valid height and weight.');
    resultContainer.style.display = 'none';
    return;
  }

  // تحويل الطول من سم إلى متر
  const heightM = heightCm / 100;
  // حساب BMI باستخدام المعادلة: الوزن / (الطول * الطول)
  const bmi = weightKg / (heightM * heightM);

  // عرض النتيجة مقربة إلى منزلة عشرية واحدة
  resultValue.textContent = bmi.toFixed(1);
  resultContainer.style.display = 'block';
});
