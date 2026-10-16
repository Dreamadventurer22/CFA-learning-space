# 📚 CFA Level 1 - Practice & Study Platform

Web app học tập CFA Level 1 với giao diện hiện đại, dễ sử dụng.

---

## 🚀 Tech Stack

- **React 18** + **TypeScript** - Framework hiện đại
- **Vite** - Build tool siêu nhanh
- **Tailwind CSS** - Styling utility-first
- **Deploy miễn phí trên Vercel**

---

## 📁 Cấu trúc Project

```
src/
├── App.tsx                    # Component chính
├── main.tsx                   # Entry point
├── index.css                  # Global styles + dark mode
├── context/
│   └── ThemeContext.tsx       # Dark/Light mode
├── components/
│   ├── Header.tsx             # Header (logo, theme toggle)
│   ├── Sidebar.tsx            # Sidebar điều hướng
│   ├── HomeView.tsx           # Trang chủ
│   ├── ReadingView.tsx        # Hiển thị danh sách câu hỏi
│   └── QuestionCard.tsx       # Card câu hỏi (toggle giải thích)
└── data/
    └── cfaData.ts             # ⭐ DỮ LIỆU CÂU HỎI (chỉnh sửa file này)
```

---

## 💻 Chạy Local (Trên máy tính)

### Bước 1: Cài đặt Node.js
- Tải và cài Node.js từ https://nodejs.org (chọn LTS version)
- Kiểm tra: mở Terminal và gõ `node --version`

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy dev server
```bash
npm run dev
```
- Mở trình duyệt, truy cập: http://localhost:5173

---

## 🌐 Deploy lên Vercel (Miễn phí)

### Bước 1: Tạo tài khoản
- Truy cập https://vercel.com
- Đăng ký bằng GitHub account

### Bước 2: Đẩy code lên GitHub
```bash
# Trong thư mục project
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/cfa-practice.git
git push -u origin main
```

### Bước 3: Import vào Vercel
1. Vào https://vercel.com/new
2. Chọn repository `cfa-practice`
3. Vercel tự động detect Vite → Bấm **Deploy**
4. Chờ 1-2 phút → Web sẽ có URL dạng: `https://cfa-practice.vercel.app`

### Bước 4: Cập nhật nội dung
- Mỗi lần sửa file `src/data/cfaData.ts`, push lên GitHub
- Vercel **tự động rebuild** và deploy lại!

---

## ✏️ Hướng dẫn thêm nội dung (KHÔNG CẦN BIẾT CODE NHIỀU)

Mở file `src/data/cfaData.ts` và làm theo mẫu sau:

### Thêm Reading mới vào Môn học có sẵn:

Tìm môn học muốn thêm, rồi thêm vào mảng `readings`:

```typescript
{
  id: "fi-reading-3",           // ID duy nhất (viết thường, có gạch nối)
  subjectId: "fixed-income",    // ID của môn học (giữ nguyên)
  title: "Reading 3: Yield Curves",
  description: "Tìm hiểu về đường cong lợi suất.",
  questions: [
    {
      id: "q11",                // ID duy nhất
      text: "Nội dung câu hỏi bằng tiếng Anh...",
      options: [
        { label: "A", text: "Đáp án A..." },
        { label: "B", text: "Đáp án B..." },
        { label: "C", text: "Đáp án C..." }
      ],
      correctAnswer: "A",       // Đáp án đúng (A, B, hoặc C)
      explanation: [
        "**Keyword** = giải thích ngắn gọn.",
        "Logic => kết luận.",
        "B sai vì => lý do.",
        "C sai vì => lý do."
      ]
    }
  ]
}
```

### Thêm Môn học mới:

Thêm vào mảng chính `cfaData`:

```typescript
{
  id: "corporate-finance",      // ID duy nhất
  name: "Corporate Finance",     // Tên hiển thị
  icon: "💼",                    // Emoji icon
  readings: [
    // ... thêm readings như trên
  ]
}
```

### Quy tắc viết Giải thích:

| Cú pháp | Kết quả |
|---------|---------|
| `**text**` | **In đậm** |
| `=>` | Mũi tên ⇒ |
| `\|` | Dấu ngăn cách |

Ví dụ:
```
"**Negative covenant** = hạn chế hành động issuer.",
"\"No additional debt\" => hạn chế phát hành nợ => negative covenant.",
"A và C sai vì => thuộc affirmative covenants."
```

---

## 🎨 Tính năng

- ✅ Giao diện modern, clean, minimalist
- ✅ Dark mode / Light mode (lưu vào localStorage)
- ✅ Sidebar phân cấp: Subject → Reading
- ✅ Toggle ẩn/hiện giải thích (học sinh tự tư duy trước)
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Hiệu ứng hover, transition mượt mà
- ✅ Hiển thị đúng/sai khi chọn đáp án
- ✅ Format giải thích: bold keywords, arrows, bullet points

---

## 📝 Lưu ý

- File dữ liệu: `src/data/cfaData.ts` — đây là file DUY NHẤT bạn cần chỉnh sửa để thêm nội dung.
- Mỗi câu hỏi cần có ID duy nhất (không trùng lặp).
- Giải thích nên viết ngắn gọn, dùng keywords và mũi tên logic.
- Giữ nguyên thuật ngữ tiếng Anh, giải thích bằng tiếng Việt.
