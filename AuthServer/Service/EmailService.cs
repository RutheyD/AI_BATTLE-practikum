using Core.IServices;
using Microsoft.Extensions.Configuration;
using System;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Service
{
    public class EmailService : IEmailService
    {
        private readonly string _smtpServer;
        private readonly int _port;
        private readonly string _senderEmail;
        private readonly string _senderPassword;

        public EmailService(IConfiguration configuration)
        {
            _smtpServer = Environment.GetEnvironmentVariable("EMAILSETTINGS_SMTPSERVER");
            _port = int.Parse(Environment.GetEnvironmentVariable("EMAILSETTINGS_PORT"));
            _senderEmail = Environment.GetEnvironmentVariable("EMAILSETTINGS_SENDEREMAIL");
            _senderPassword = Environment.GetEnvironmentVariable("EMAILSETTINGS_SENDERPASSWORD");
        }

        public async Task SendEmailAsync(string to, string subject, string body)
        {
            try
            {
                using var smtp = new SmtpClient(_smtpServer)
                {
                    Port = _port,
                    Credentials = new System.Net.NetworkCredential(_senderEmail, _senderPassword),
                    EnableSsl = true
                };

                var mail = new MailMessage
                {
                    From = new MailAddress(_senderEmail),
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };

                mail.To.Add(to);
                await smtp.SendMailAsync(mail);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Failed to send email: {ex.Message}");
            }
        }
    }
}
