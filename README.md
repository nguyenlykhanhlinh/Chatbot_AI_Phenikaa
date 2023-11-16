# Chatbot_AI_Phenikaa
Giới thiệu platform và tính năng cơ bản của FlowAI
Hôm nay mình sẽ cùng các bạn đi tìm hiểu và sử dụng một ứng dụng khá hay tên là FlowAI. Đây là một no-code platform cho phép xây dựng một ứng dụng sử dụng Large Language Models - Mô hình ngôn ngữ lớn. Phần mềm cung cấp một giao diện trực quan nơi mà người dùng có thể sử dụng các thành phần bằng cách kéo thả để xây dựng một phần mềm AI. Ví dụ xây dựng một chuỗi xử lý ngôn ngữ tự nhiên đơn giản hoặc phát triển một chatbot dùng để hỏi đáp. Ngoài ra, FlowAI có Marketplaces chứa các mẫu ứng dụng và các công cụ (có thể là các phần mềm bên thứ ba) cần dùng trong ứng dụng mà bạn muốn xây dựng. Chỉ cần 1 cú click và vài thao tác điền thông số bạn đã có ngay một ứng dụng AI mà không mất quá nhiều thời gian và công sức. Credential là nơi bạn có thể quản lý tất cả các key ví dụ như OpenAI Key, Supabase credential, … Không chỉ vậy, API Key là nơi quản lý key của bạn.

Hướng dẫn người xem cách dùng template
Như các bạn thấy, chúng ta đang ở trang chủ của FlowAI, từ đây, bạn hãy chọn Marketplace trên thanh sidebar, nó sẽ đưa bạn tới trang nơi mà các templates có sẵn. Bây giờ bạn hãy nhìn phần templates trên trang Marketplace này, có rất nhiều mẫu để có thể lựa chọn, hãy tìm template Q&A with your own data,hãy click vào nó.
Và đây, sau khi chọn template, các bạn sẽ nhìn thấy chi tiết của template. Để có thể sử dụng, hãy ấn vào nút Use Template ngay phía trên góc phải màn hình. Bây giờ, như các bạn nhìn thấy, chi tiết của luồng hỏi đáp với dữ liệu riêng này có một vài thông số cần phải điền trước khi có thể đưa nó chạy thực tế.
Đầu tiên,  chúng ta cần phải điền credential cho một vài node ví dụ như credential của OpenAI Key. Ngay khi đăng kí tài khoản trên eFlowAI thành công, các bạn đã có một tài khoản được tạo 1 flow free với một số lượng token miễn phí nhất định. Các bạn có thể tưởng tượng, khi chatbot chạy thực tế, mỗi một câu hỏi bạn đưa ra cho chatbot và nhận về phản hồi từ nó thì sẽ có một lượng token bị trừ đi. Cứ như vậy, các bạn sẽ được dùng thoải mái cho đến khi hết lượng token đó nếu chọn credential mặc định của hệ thống. Vì vậy,  nếu các bạn không muốn dùng credential default, các bạn có thể điền credential của các bạn, lúc này lượng token của các bạn sẽ không bị trừ đi nữa.
Để có credential của Supabase, bạn hãy truy cập vào trang https://supabase.com/ , đăng kí và đăng nhập vào tài khoản của mình. Tiếp theo, trên trang chủ của supabase, hãy click vào nút New Project để tạo một project mới.
Tới đây, bạn có chọn organization của riêng bạn hoặc để mặc định. Hãy điền tên cho project mới của bạn. Ở đây mình sẽ đặt tên project của mình là my-supabase-project. Tiếp theo, các bạn phải đặt mật khẩu cho database của các bạn. Đối với mật khẩu này, bạn có thể ấn vào nut Generate a password để có một mật khẩu với độ bảo mật cao. Sau khi ấn tạo password, hãy copy lại password đó. Về phần region và pricing plan trong phần video lần này, mình mình sẽ để giá trị mặc định. Tuy nhiên, các bạn cũng có thể đổi sang region và pricing plan khác.
"Sau khi hoàn thành, project của mình sẽ được tạo ra. 
Trở lại với FlowAI, chúng ta đang dừng ở việc điền các thông số cho node Supabase, bây giờ thông số đầu tiên cần điền là Connect Credential, các bạn hãy truy cập lại vào trang Supabase vừa tạo, copy phần API Key trong phần Project Configuration và paste lại vào ô Connect Credential. Vậy là đã hoàn thành xong phần Credential. Tiếp đến với trường Supabase Project URL, tương tự như phầnURL của phần Project Credential để copy link project, quay trở lại luồng chatbot của bạn và paste nó vào ô Supabase Project URL.
"
Hãy vào trang Supabase, ấn chọn biểu tượng SQL Editor bên thanh sidebar, sau đó ấn chọn New Query, hãy copy và paste đoạn query vào phần editor. Đoạn query mình sẽ để dưới phần description nhé. Tiếp theo, hãy ấn Enter hoặc tổ hợp phím Ctrl + Enter để chạy đoạn query trên. 
Sau khi chạy xong, các bạn sẽ có một table mới tên là documents và một query name là match_documents. Giờ hãy điền documents vào trường table name và match_documents vào phần query name. Như vậy là chúng ta đã hoàn thiện phần điền thông số cần thiết cho template chatbot hỏi đáp với nguồn dữ liệu riêng.
Như đã đề cập, sự độc đáo của chatbot này là nó sẽ dựa trên nguồn dữ liệu riêng của bạn, vì vậy, bạn cần upload file chứa dữ liệu bạn muốn dùng làm nguồn cho con chatbot. Không chỉ vậy, data của bạn khi được tải lên sẽ được xử lý và training cho chatbot. Trong video này, mình muốn làm 1 con chatbot tư vấn về nồi cơm điện nên bây giờ mình sẽ upload một file chứa thông tin các sản phẩm nồi cơm điện của shop mình bây giờ đang có.
Vậy là đã đầy đủ thông tin, bây giờ hãy lưu flow đã chỉnh sửa này lại bằng cách ấn nút Save và điền tên Flow của bạn.
"Chúng ta đã lưu thành công, bây giờ mình sẽ test thử con chatbot bằng cách dùng trực tiếp trên eFlowAI.
Các bạn có thể hỏi thử chatbot để được tư vấn về mua nồi cơm điện. Ví dụ mình sẽ hỏi “Nếu gia đình có 1 - 2 người, nên chọn nồi bao nhiêu lít” Các bạn có thể thấy kết quả đã trùng khớp với thông tin trên file mà mình upload lên.
"
Ngoài cách test này ra, còn có rất nhiều cách tích hợp khác của luồng chatbot này. Các bạn có thể ấn vào nút API Endpoint cạnh nút Save. Các bạn có thể thấy, có rất lựa chọn để tích hợp con chatbot này. Trong video này, mình sẽ hướng dẫn các bạn nhúng con chatbot này vào một trang web.
Bạn hãy copy đoạn script trên, sau đó mở trang web mà bạn muốn nhúng, paste script vào phần body của trang web
Nào, bây giờ hãy mở trang web bạn vừa nhúng script lên, và bạn sẽ nhìn thấy chatbot đã hiện lên trang web và bạn có thể dùng nó như lúc test trên eFlowAI.












