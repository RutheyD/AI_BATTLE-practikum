using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.IServices
{
    public interface IS3Service
    {
     
        Task DeleteFileAsync(string fileUrl);
        Task<string> GetPresignedUrlAsync(string fileName, string contentType);
        Task<string> GetDownloadUrlAsync(string fileName);
    }
     
}
