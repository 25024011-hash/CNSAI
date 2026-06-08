import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "basic-file-operations",
    number: "01",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    caseStudy: "Case Study 01",
    shortDescription: "Tổ chức không gian lưu trữ số khoa học phục vụ ngành Công nghệ Vật liệu.",
    description: "Xây dựng tư duy phân tầng dữ liệu thông qua cấu trúc cây thư mục chuẩn hóa và áp dụng các quy chuẩn đặt tên tệp tin kỹ thuật chuyên nghiệp.",
    icon: "FolderGit2",
    sections: [
      {
        id: "problem",
        title: "1. Bài toán quản lý dữ liệu",
        content: "Đối mặt với khối lượng khổng lồ tài liệu học thuật từ bài giảng, tài liệu tra cứu datasheet linh kiện điện tử (IC, Transistor, Op-Amp), sơ đồ mạch nguyên lý (Schematics) đến mã nguồn nhúng C/C++. Việc lưu trữ bừa bãi ngoài Desktop hoặc trong mục Downloads tạo ra sự hỗn loạn hệ thống, hao phí 25-30% thời gian chỉ để tìm kiếm tệp tin và gia tăng rủi ro mất mát dữ liệu khi hệ điều hành gặp sự cố."
      },
      {
        id: "process",
        title: "2. Quản lý thực thi & Điều phối tệp tin",
        content: "Khắc phục triệt để bằng cách áp dụng quy chuẩn đặt tên tệp tin khoa học và tổ chức hệ thống lưu trữ đồng bộ. Tôi sử dụng quy tắc viết chữ CamelCase hoặc Snake_Case kết hợp với tiền tố mã số sinh viên hoặc mã học phần để định danh tệp tin rõ ràng.",
        points: [
          "Đặt tên tệp tin chuẩn hóa: [Mã_Môn_Học]_[Tên_Dự_Án]_[Phiên_Bản]_[Ngày_Thực_Hiện]. Ví dụ: ECE2102_OpAmpFilter_V2_202606.pdf",
          "Phân tách các tệp tài nguyên gốc (datasheet, slide gốc) khỏi các tệp đầu ra sản phẩm (báo cáo hoàn chỉnh, sơ đồ xuất bản).",
          "Áp dụng phím tắt tìm kiếm nâng cao (Search Filters) theo định dạng file (e.g. filetype:pdf, filetype:cpp) để tối ưu hóa hiệu suất điều hướng."
        ]
      },
      {
        id: "system-thinking",
        title: "3. Tư duy hệ thống hóa không gian số",
        content: "Tư duy hệ thống hóa giúp tổ chức không gian lưu trữ cá nhân như một kiến trúc mạng phân cấp rõ ràng. Việc phân nhánh sâu tối đa 3-4 cấp thư mục đảm bảo thông tin luôn có nguồn gốc và dễ truy xuất, đồng thời đồng bộ hóa hoàn toàn lên điện toán đám mây (Google Drive/One Drive) để phục vụ học tập đa nền tảng mọi lúc mọi nơi."
      }
    ],
    dataBox: {
      title: "Cấu trúc thư mục học tập chuẩn hóa tại UET",
      headers: ["Đường dẫn thư mục", "Loại nội dung lưu trữ", "Định dạng tệp tin ưu tiên", "Trạng thái đồng bộ"],
      rows: [
        ["/UET_K70/HK2_2025_2026/VNU1001_DigitalTech/Projects", "Các sản phẩm Case Study môn học công nghệ số", ".pdf, .docx, .png, .zip", "Đã đồng bộ Google Drive"],
        ["/UET_K70/HK2_2025_2026/ECE2102_Electronics/Datasheets", "Tài liệu kỹ thuật thông số linh kiện bán dẫn", ".pdf", "Lưu trữ đám mây & Ngoại tuyến"],
        ["/UET_K70/HK2_2025_2026/ECE2102_Electronics/Lab_Codes", "Mã nguồn thí nghiệm lập trình vi điều khiển", ".ino, .cpp, .h, .c", "Đầu đẩy qua GitHub Repo"],
        ["/UET_K70/HK2_2025_2026/MATH1005_Calculus/Exercises", "Bài tập lớn Giải tích và Giáo trình điện tử", ".pdf, .xlsx", "Đã đồng bộ Google Drive"]
      ]
    }
  },
  {
    id: "academic-search",
    number: "02",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    caseStudy: "Case Study 02",
    shortDescription: "Nâng cao năng lực sàng lọc tài liệu nghiên cứu khoa học vật liệu thế hệ mới.",
    description: "Làm chủ kỹ năng tìm kiếm bài báo khoa học chất lượng cao trên các cơ sở dữ liệu học thuật quốc tế lớn và đánh giá nguồn tin qua tiêu chí học thuật khắt khe.",
    icon: "GraduationCap",
    sections: [
      {
        id: "problem",
        title: "1. Bài toán tối ưu hóa phần cứng",
        content: "Trong ngành Công nghệ Vật liệu, việc nghiên cứu các xu thế công nghệ mới như vật liệu bán dẫn Nano, vật liệu thông minh thế hệ mới đòi hỏi tài liệu chính xác từ các nguồn tin học thuật đáng tin cậy. Nếu chỉ tìm kiếm thông thường trên Google, sinh viên sẽ bị chôn vùi trong những website quảng cáo thương mại, diễn đàn không chuyên môn, hoặc các tài liệu lỗi thời không có giá trị học thuật."
      },
      {
        id: "strategy",
        title: "2. Chiến lược thu thập thông tin",
        content: "Áp dụng các toán tử Boolean và cú pháp tìm kiếm tiên tiến (Advanced Search Operators) trên Google Scholar, Nature Index và ScienceDirect để khoanh vùng tài liệu tối ưu:",
        points: [
          "Cú pháp Boolean nâng cao: (\"perovskite solar cells\" OR \"silicon photovoltaics\") AND \"efficiency\"",
          "Giới hạn vùng nguồn lực học thuật: \"nanostructured materials\" site:nature.com OR site:sciencedirect.com",
          "Truy lục định dạng tệp tin khoa học trực tiếp và loại bỏ tiếp thị thương mại: filetype:pdf \"graphene synthesis\" -commercial"
        ]
      },
      {
        id: "analysis",
        title: "4. Tư duy phân tích",
        content: "Để đánh giá độ tin cậy của bài báo khoa học, tôi áp dụng bộ quy chuẩn phân tích khoa học đa chiều. Tôi xem xét thứ hạng tạp chí khoa học (Q1, Q2 trong danh mục SCImago/Scopus), chỉ số trích dẫn bài viết, danh tiếng các học giả đầu ngành và uy tín của nhà xuất bản công nghệ (Springer, Elsevier, Wiley) để đảm bảo dữ liệu đưa vào báo cáo môn học là xác thực và cập nhật mới nhất."
      }
    ],
    dataBox: {
      title: "Bảng tổng hợp & Đánh giá tài liệu khoa học chọn lọc chuyên ngành",
      headers: ["Chủ đề nghiên cứu", "Tên bài báo / Tác phẩm", "Nhà xuất bản / Tạp chí", "Chỉ số tin cậy (Q & Citations)", "Giá trị ứng dụng cốt lõi"],
      rows: [
        ["Vật liệu bán dẫn Nano", "Review of Perovskite Semiconductor Materials", "Nature Materials (2024)", "Q1 - 320+ Citations", "Phân tích cấu trúc tinh thể & hiệu suất quang điện"],
        ["Vật liệu siêu dẫn nhiệt độ cao", "Synthesis pathways for High-Tc Superconductors", "Elsevier Materialia (2023)", "Q1 - 145+ Citations", "Sơ đồ tinh thể học mô tả dòng điện hạn mức tối cao"],
        ["Hợp kim siêu nhẹ hàng không", "Mechanical properties of titanium-aluminum alloys", "Springer (2022)", "Q2 - 110+ Citations", "Cơ chế chống mỏi và lan truyền vết nứt kết cấu"],
        ["Polyme dẫn điện ứng dụng IoT", "Conductive Polymers for Bio-sensors", "Wiley Polymer Science (2025)", "Q1 - 75+ Citations", "Tổng hợp vi cáp composite thế hệ mới phục vụ y sinh"]
      ]
    }
  },
  {
    id: "effective-prompting",
    number: "03",
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    caseStudy: "Case Study 03",
    shortDescription: "Giao tiếp lập trình thông minh với Trí tuệ nhân tạo.",
    description: "Xây dựng các câu lệnh có cấu trúc, áp dụng bộ khung chuẩn mực kỹ thuật để biến AI thành một cộng sự đắc lực trong học tập phức tạp.",
    icon: "MessageSquareCode",
    sections: [
      {
        id: "problem",
        title: "1. Bài toán giao tiếp thuật toán",
        content: "Nhiều sinh viên gọi AI là 'kẻ nói dối' hay 'học lực trung bình' vì họ nhận được những câu trả lời hời hợt hoặc bịa đặt (AI Hallucination). Bản chất là do Prompt của họ quá sơ sài, thiếu ngữ cảnh và mục tiêu cụ thể, ví dụ như câu lệnh ngắn ngủi: 'giải hộ mạch điện RLC'. AI không thể hiểu được bối cảnh học tập hay yêu cầu phân tích cụ thể của giảng viên."
      },
      {
        id: "navigation",
        title: "2. Kỹ thuật điều hướng AI",
        content: "Ứng dụng các quy tắc nâng cao để dẫn dắt bộ não AI hoạt động hết công suất. Tôi sử dụng kỹ thuật 'Few-Shot Prompting' (cung cấp ví dụ mẫu trước khi bắt đầu), 'Role-Playing' (yêu cầu AI đóng vai là một nhà khoa học vật liệu gạo cội tại MIT), và đặc biệt là 'Chain-of-Thought' (kỹ thuật chuỗi suy nghĩ từng bước) để AI đưa ra lập luận mạch lạc trước khi kết luận đáp số."
      },
      {
        id: "clear-framework",
        title: "3. Đúc kết bộ khung C.L.E.A.R",
        content: "Tôi đúc rút ra bộ khung C.L.E.A.R tiêu chuẩn để tối ưu hóa mọi tương tác với mô hình ngôn ngữ lớn (LLM):",
        points: [
          "C - Context (Bối cảnh): Đóng vai sinh viên ngành Công nghệ Vật liệu Đại học Công nghệ đang nghiên cứu cấu trúc tinh thể.",
          "L - Limits (Giới hạn): Không được giả định thông số, chỉ dùng thông số lý thuyết chuẩn tắc.",
          "E - Examples (Ví dụ): Định dạng công tác viết phương trình đặc tính cấu trúc tinh thể ví dụ như a = b != c cho hệ lục giác.",
          "A - Actor (Vai trò): Chuyên gia cấu trúc học liên tục.",
          "R - Retrieve (Trình bày): Xuất kết quả dưới dạng Markdown cấu trúc có bảng so sánh thông số pha."
        ]
      }
    ],
    dataBox: {
      title: "Đối chiếu hiệu quả: Prompt Nguyên bản vs Prompt Kỹ thuật",
      headers: ["Nhiệm vụ tương tác", "Prompt thông thường (Naive)", "Prompt Kỹ thuật (C.L.E.A.R)", "Chênh lệch chất lượng kết quả đầu ra"],
      rows: [
        ["Phân tích giản đồ nhiệt Fe-C", "Hợp kim sắt cacbon hoạt động thế nào?", "Đóng vai Chuyên gia Luyện kim. Giải thích cấu trúc pha Austenit, Ferrit, và Cementit trong giản đồ trạng thái Fe-C ở nhiệt độ 727°C. Trình bày phương trình phản ứng cùng tích (eutectoid) dạng Markdown.", "Đầu ra C.L.E.A.R cung cấp chính xác ranh giới pha, nhiệt độ biến đổi chuẩn xác kèm liên kết lý thuyết vật lý chất rắn thay vì chỉ mô tả sơ sài."],
        ["Sửa đổi hằng số Poisson", "Cho tôi công thức định luật Hooke cơ bản.", "Đóng vai Nhà khoa học Vật lý Vật liệu. Tìm lỗi thiết lập trong mô hình cơ học nén dưới đây, hướng dẫn tính chính xác mô-đun cắt G dựa trên hằng số đàn hồi Young E và hệ số Poisson v. Trình bày từng bước tính toán chi tiết.", "Chỉ ra mâu thuẫn đồng nhất đơn vị trong dữ liệu nhập, tránh hiện tượng lỗi tính toán số học hời hợt của AI thông qua hướng dẫn từng bước."]
      ]
    }
  },
  {
    id: "online-collaboration",
    number: "04",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    caseStudy: "Case Study 04",
    shortDescription: "Tối ưu hóa quản trị công việc nhóm trên môi trường số đám mây.",
    description: "Thiết lập hành lang thông tin số tích hợp từ đám mây, sử dụng các văn bản đồng tác giả và biểu đồ Gantt để theo dõi tiến độ một cách khoa học.",
    icon: "UsersRound",
    sections: [
      {
        id: "problem",
        title: "1. Bài toán phối hợp từ xa",
        content: "Làm việc nhóm trong các bài tập môn học tại trường công nghệ thường gặp rắc rối lớn do lệch pha lịch sinh hoạt cá nhân, thiếu sự truyền đạt thông tin tập trung dẫn đến việc các thành viên làm chồng chéo công việc, rò rỉ hoặc mất mát các phiên bản slide, tài liệu Word viết dở."
      },
      {
        id: "management",
        title: "2. Điều phối hạ tầng số & Vận hành nhóm",
        content: "Chúng tôi quy hoạch toàn bộ hạ tầng làm việc nhóm trực tuyến về một mối, kết hợp các công cụ chuyên biệt để quản lý tác vụ liên thông:",
        points: [
          "Google Workspace (Docs, Sheets, Slides) đóng vai trò soạn thảo tài liệu cộng tác thời gian thực.",
          "Trello & Notion quản lý danh sách việc cần làm (To-Do, In Progress, Review, Done) bằng bảng Kanban.",
          "Lưu trữ đám mây dùng thư mục chia sẻ có phân cấp quyền truy cập từ Viewer đến Editor chặt chẽ."
        ]
      },
      {
        id: "optimizing",
        title: "3. Tư duy tối ưu quy trình cộng tác số",
        content: "Tư duy tối ưu hóa cộng tác số nằm ở việc số hóa quy trình theo dõi. Mọi cuộc họp họp trực tuyến đều phải đi kèm Biên bản cuộc họp (Meeting Minutes) lưu trực tuyến, ghi rõ quyết định và người chịu trách nhiệm. Đồng thời quy ước về việc ghi tên phiên bản hồ sơ để đảm bảo dự án luôn vận hành trơn tru đúng hạn."
      }
    ],
    dataBox: {
      title: "Phân bổ Ma trận Trách nhiệm Công tác (RACI) & Biểu đồ Tiến độ",
      headers: ["Tác vụ / Sản phẩm", "Trưởng nhóm (Minh)", "Thành viên A", "Thành viên B", "Công cụ Đảm nhiệm"],
      rows: [
        ["Xây dựng Khung đề cương cuộc họp", "Accountable (Chịu trách nhiệm chính)", "Consulted (Đóng góp ý kiến)", "Informed (Nhận thông báo)", "Google Docs & Slack"],
        ["Thiết kế sơ đồ mạch mô phỏng", "Consulted (Gợi ý phân tích kỹ thuật)", "Responsible (Thực thi chính)", "Informed (Nắm bắt tiến độ)", "Proteus / Multisim"],
        ["Viết báo cáo chuyên sâu PDF", "Responsible (Tổng hợp bài viết)", "Responsible (Viết mục 1, 2)", "Responsible (Viết mục 3, 4)", "Google Docs đồng soạn thảo"],
        ["Thiết kế Slide Canva thuyết trình", "Informed (Duyệt kịch bản)", "Consulted (Chuẩn bị hình ảnh)", "Responsible (Thiết kế đồ họa)", "Canva Collaboration Link"]
      ]
    }
  },
  {
    id: "generative-ai-content",
    number: "05",
    title: "Sử dụng AI tạo sinh hỗ trợ sáng tạo nội dung",
    caseStudy: "Case Study 05",
    shortDescription: "Tăng tốc biên tập truyền thông khoa học bằng các mô hình AI.",
    description: "Quy trình thiết kế ấn tượng kết hợp giữa trí óc thẩm mỹ con người và các công cụ AI tạo sinh hình ảnh, âm thanh, kịch bản tiên tiến.",
    icon: "Sparkles",
    sections: [
      {
        id: "problem",
        title: "1. Bài toán sản xuất nội dung",
        content: "Sản xuất một sản phẩm truyền thông học thuật như video thuyết trình về lịch sử nghiên cứu vật liệu mới hay infographic giới thiệu chuyên ngành Vật liệu đòi hỏi sinh viên phải có kỹ năng cao về thiết kế, lồng tiếng chuyên nghiệp và biên tập video. Việc tự mình làm thủ công từ A-Z khiến sinh viên đuối sức, sản phẩm ra lò thiếu độ trau chuốt về cả phần nhìn và phần nghe."
      },
      {
        id: "pipeline",
        title: "3. Quy trình tích hợp AI & Hậu kỳ",
        content: "Quy trình sản xuất nội dung đa phương tiện thế hệ mới kết hợp sức mạnh bổ trợ của AI cùng khâu hậu kỳ thủ công tỉ mỉ:",
        points: [
          "Dùng ChatGPT để lên ý tưởng biên kịch, tạo dàn ý cốt truyện và triển khai lời thoại thuyết minh (Voice-over Script).",
          "Ứng dụng Midjourney / Leonardo.ai tạo tư liệu ảnh đặc tả mạch điện vi mô với độ nét 8K siêu chân thực.",
          "Chuyển ngữ giọng đọc AI siêu thực qua ElevenLabs để thuyết minh bằng cả tiếng Anh và tiếng Việt.",
          "Sử dụng Premiere / CapCut để dựng phim, căn thời gian, chèn nhạc nền và chỉnh hiệu ứng chuyển cảnh để giữ hồn cốt nghệ thuật độc đáo của tác giả."
        ]
      },
      {
        id: "mastery",
        title: "4. Tư duy làm chủ công nghệ",
        content: "Mấu chốt của học phần là hiểu vị thế của con người: AI chỉ là nô bộc cung cấp chất liệu thô, còn sinh viên chính là người đạo diễn định hình phong cách, kiểm soát độ chính xác của nội dung học thuật và đưa ra quyết định thẩm mỹ cuối cùng để biến sản phẩm thành tác phẩm nghệ thuật có dấu ấn riêng biệt."
      }
    ],
    dataBox: {
      title: "Luồng sản xuất nội dung Học thuật số (Digital Content Pipeline)",
      headers: ["Công nghệ áp dụng", "Vai trò thiết lập chính", "Sản phẩm đầu ra trung gian", "Tỷ lệ đóng góp (AI vs Người)"],
      rows: [
        ["ChatGPT-4o", "Tạo kịch bản lời thoại khoa học", "Kịch bản thuyết minh 300 từ", "AI 60% (Ý tưởng) - Người 40% (Sửa ngôn từ)"],
        ["DALL-E 3 & Canva", "Phác họa hình ảnh minh họa bán dẫn", "10 bức ảnh slide minh họa cấu trúc silicon", "AI 70% (Tạo hình) - Người 30% (Chỉnh bố cục)"],
        ["Bark / ElevenLabs", "Tạo giọng đọc thuyết minh tiếng Anh", "Tệp âm thanh WAV chất lượng cao", "AI 90% (Giọng) - Người 10% (Sửa ngắt quãng)"],
        ["Premiere Pro / CapCut", "Hậu kỳ ghép nối, chèn nhạc và hiệu ứng", "Video phóng sự khoa học MP4 hoàn chỉnh", "AI 10% (Subtitles) - Người 90% (Editor chính)"]
      ]
    }
  },
  {
    id: "responsible-ai",
    number: "06",
    title: "Sử dụng AI có trách nhiệm trong học tập",
    caseStudy: "Case Study 06",
    shortDescription: "Tuyên ngôn học thuật liêm chính trong kỷ nguyên Trí tuệ nhân tạo.",
    description: "Bộ quy tắc sử dụng trí tuệ nhân tạo có kiểm chứng, tuân thủ nguyên tắc sở hữu trí tuệ và nâng cao tư duy phản biện cá nhân.",
    icon: "ShieldAlert",
    sections: [
      {
        id: "problem",
        title: "1. Bài toán đạo đức thuật toán",
        content: "Sự bùng nổ của các mô hình AI tạo sinh dẫn đến một mặt tối nguy hiểm: sinh viên phó mặc bài làm cho AI, sao chép nguyên văn (copy-paste) báo cáo, đồ án mà không hiểu bản chất kỹ thuật. Điều này làm thui chột nghiêm trọng kỹ năng tự học, tư duy độc lập và có nguy cơ cao vi phạm liêm chính khoa học khi dữ liệu AI sinh ra bị sai lệch (Hallucination) hoặc bị vi phạm bản quyền từ tác giả khác."
      },
      {
        id: "control",
        title: "2. Quá trình kiểm soát & Làm chủ AI",
        content: "Trở thành người dùng AI thông thái bằng cách thiết lập 'Cơ chế kiểm chứng chéo' (Cross-Verification). Mọi thông tin, phương án thiết kế mạch, hay dòng code C++ do AI viết ra đều phải được tôi kiểm tra lại tính đúng đắn dựa trên sách giáo trình lý thuyết chính quy của giảng viên UET, datasheet chính hãng từ nhà sản xuất chip (TI, STMicroelectronics), và các bài báo khoa học chuẩn mực.",
        points: [
          "Chạy thử nghiệm độc lập: đưa code AI viết vào compiler để phân tích lỗi biên dịch trước khi đưa vào ứng dụng.",
          "Kiểm tra trùng lặp và tính nguyên bản để đảm bảo không vi phạm lỗi đạo văn vô ý.",
          "Thực hiện trích dẫn nguồn đóng góp của AI rõ ràng khi nộp báo cáo nghiên cứu học thuật."
        ]
      },
      {
        id: "ideology",
        title: "3. Hệ tư tưởng sử dụng AI",
        content: "Ứng dụng AI học tập dựa trên nguyên tắc: 'AI là bệ phóng từ 0 lên 1, trí tuệ con người là sự tinh hoa đưa từ 1 đến 10'. AI đóng vai trò như một huấn luyện viên, một người phản biện đa chiều giúp khơi gợi góc nhìn mới, còn kỹ năng thực tiễn và nhận thức kỹ thuật chuyên môn vẫn phải được trau dồi vững chắc bằng chính khối óc và đôi tay của chúng ta."
      }
    ],
    dataBox: {
      title: "Tuyên ngôn 4 Nguyên tắc Sử dụng AI Có trách nhiệm",
      headers: ["Nguyên tắc cốt lõi", "Cam kết thực thi cá nhân", "Hành động phòng tránh rủi ro", "Mục tiêu hướng tới"],
      rows: [
        ["Nguyên tắc Liêm chính", "Khai báo minh bạch phạm vi sử dụng AI trong mọi bài tập lớn", "Không sao chép nguyên văn 100% dòng văn bản AI", "Bảo vệ uy tín học thuật cá nhân"],
        ["Nguyên tắc Kiểm chứng", "Luôn kiểm tra chéo các công thức toán và mạch điện AI thiết kế", "Xác thực lại thông số qua Datasheet thực tế", "Tránh lỗi ảo tưởng tri thức của AI"],
        ["Nguyên tắc Tôn trọng Bản quyền", "Bảo hộ quyền tác giả đối với sản phẩm dữ liệu học thuật gốc", "Dẫn nguồn bài báo khoa học thực sự thay vì link AI bịa", "Sở hữu kiến thức chân thực"],
        ["Nguyên tắc Nâng cao Bản thân", "Sử dụng AI như người phản biện để thách thức tư duy", "Chỉ dùng AI sau khi đã tự suy nghĩ và giải bài tối thiểu 30p", "Nâng cao năng lực chuyên môn kỹ sư"]
      ]
    }
  }
];
