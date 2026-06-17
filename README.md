# medical_privacy

Medical AI ilovasi uchun alohida Vue 3 + Tailwind CSS v4 frontend:

- Landing page (`/`)
- Privacy (`/privacy`)
- Help (`/help`)
- Contact (`/contact`)
- Terms of Use (`/terms`)
- Robokassa success callback sahifasi (`/billing/success`)

## Ishga tushirish

```bash
npm install
npm run dev
```

## Return to app (deep link)

`.env` faylida ilovaga qaytish URL manzilini sozlang:

```bash
VITE_RETURN_TO_APP_URL=medicalai://billing/success
```

Callback misol:

`/billing/success?OutSum=399.00&InvId=6&SignatureValue=...&IsTest=1&Culture=en`

Ushbu query parametrlar sahifada ko'rsatiladi va `Return to app` tugmasi orqali ilovaga qaytariladi.
