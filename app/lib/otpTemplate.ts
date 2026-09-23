export function otpEmailTemplate(otp: string): string {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>رمز التحقق | لمسه الثابته</title>
</head>
<body style="margin:0;padding:24px 12px;background:#f4f7fa;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;direction:rtl;color:#1e293b;">
  <!-- Preheader text -->
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
    مرحباً بك في لمسه الثابته لخدمات شرائح الإنترنت. رمز التحقق الخاص بك هو: \${otp} (صالح لمدة 10 دقائق)
  </div>

  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:480px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 10px 15px -3px rgba(0,0,0,0.05);">
    
    <!-- Header -->
    <tr>
      <td style="padding:32px 24px 20px;text-align:center;background:#0A1C29;">
        <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:1px;">لمسه الثابته</h1>
        <p style="margin:8px 0 0;font-size:14px;color:#94a3b8;">بوابتك الموثوقة لشرائح الإنترنت والاتصالات</p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:32px 24px;text-align:center;">
        <h2 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#0A1C29;">أهلاً بك معنا!</h2>
        <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.6;">
          يسعدنا اختيارك لـ <strong>لمسه الثابته</strong>. لضمان أمان حسابك وإتمام طلبك بنجاح، يرجى استخدام رمز التحقق التالي:
        </p>

        <div style="display:inline-block;padding:16px 32px;background:#f8fafc;border:2px dashed #0A1C29;border-radius:8px;margin:0 0 24px;">
          <span style="font-family:'Courier New',Courier,monospace;font-size:32px;font-weight:800;letter-spacing:10px;direction:ltr;display:inline-block;color:#0A1C29;">\${otp}</span>
        </div>

        <p style="margin:0 0 8px;font-size:14px;color:#64748b;">هذا الرمز صالح لمدة <strong>10 دقائق</strong> فقط.</p>
        <p style="margin:0;font-size:13px;color:#94a3b8;">إذا لم تقم بطلب هذا الرمز، يُرجى تجاهل هذه الرسالة، فحسابك في أمان تام.</p>

        <!-- Divider -->
        <div style="margin:32px 0;border-top:1px solid #e2e8f0;"></div>

        <p style="margin:0;font-size:13px;color:#64748b;line-height:1.5;">
          نسعى دائماً لتقديم أفضل باقات الإنترنت لتبقى على اتصال دائم.<br>
          شكراً لثقتك بنا!
        </p>

        <div style="margin:24px 0 0;font-size:14px;font-weight:600;color:#0A1C29;">
          فريق دعم لمسه الثابته
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
