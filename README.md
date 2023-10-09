import io.minio.GetObjectResponse;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

public class MinIOGetObjectResponseToMultipartFileConverter {

    public static MultipartFile convert(GetObjectResponse getObjectResponse) throws IOException {
        // 获取GetObjectResponse中的输入流
        InputStream inputStream = getObjectResponse;
        
        // 假设你有文件名和文件类型的信息
        String fileName = "example.txt"; // 替换为实际的文件名
        String contentType = "text/plain"; // 替换为实际的文件类型
        
        // 创建一个ByteArrayResource来包装输入流
        ByteArrayResource resource = new ByteArrayResource(inputStream.readAllBytes()) {
            @Override
            public String getFilename() {
                return fileName;
            }
        };
        
        // 创建MultipartFile
        MultipartFile multipartFile = new MultipartFile() {
            @Override
            public String getName() {
                return "file";
            }

            @Override
            public String getOriginalFilename() {
                return fileName;
            }

            @Override
            public String getContentType() {
                return contentType;
            }

            @Override
            public boolean isEmpty() {
                return false;
            }

            @Override
            public long getSize() {
                try {
                    return resource.contentLength();
                } catch (IOException e) {
                    return 0;
                }
            }

            @Override
            public byte[] getBytes() throws IOException {
                return resource.getByteArray();
            }

            @Override
            public InputStream getInputStream() throws IOException {
                return resource.getInputStream();
            }

            @Override
            public void transferTo(java.io.File dest) throws IOException, IllegalStateException {
                // Optional: Implement this method if needed
            }
        };
        
        return multipartFile;
    }
}
