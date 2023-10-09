# qm-supplierMagTab
供应商管理分页模块
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.multipart.support.StandardMultipartFile;

import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;

import java.io.IOException;
import java.util.Collections;

public class GetObjectResponseToMultipartFileConverter {

    public static MultipartFile convert(GetObjectResponse getObjectResponse) throws IOException {
        ResponseBytes<byte[]> responseBytes = getObjectResponse.asByteArray();
        byte[] content = responseBytes.asByteArray();
        
        // 假设你有文件名和文件类型的信息
        String fileName = "example.txt"; // 替换为实际的文件名
        String contentType = "text/plain"; // 替换为实际的文件类型
        
        // 创建一个MultiValueMap，用于构建MultipartFile
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.put("Content-Disposition", Collections.singletonList("attachment; filename=" + fileName));
        headers.put("Content-Type", Collections.singletonList(contentType));
        
        // 创建MultipartFile
        MultipartFile multipartFile = new StandardMultipartFile("file", fileName, contentType, content);
        
        return multipartFile;
    }
}
