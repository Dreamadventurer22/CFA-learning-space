export interface Question {
  id: string;
  text: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: string[];
}

export interface Reading {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  readings: Reading[];
}

export const cfaData: Subject[] = [
  {
    id: "ethics",
    name: "Ethical & Professional Standards",
    icon: "⚖️",
    readings: [
      {
        id: "ethics-reading-1",
        subjectId: "ethics",
        title: "Reading 1: Code of Ethics & Standards of Professional Conduct",
        description: "Tìm hiểu về bộ quy tắc đạo đức và các tiêu chuẩn hành nghề của CFA Institute.",
        questions: [
          {
            id: "q1",
            text: "According to the CFA Institute Code of Ethics, members must place the integrity of the investment profession and the interests of clients above their own personal interests. Which Standard is most directly related to this principle?",
            options: [
              { label: "A", text: "Standard I(A) – Knowledge of the Law" },
              { label: "B", text: "Standard III(A) – Loyalty, Prudence, and Care" },
              { label: "C", text: "Standard VI(A) – Disclosure of Conflicts" }
            ],
            correctAnswer: "B",
            explanation: [
              "**Standard III(A) – Loyalty, Prudence, and Care** yêu cầu members đặt lợi ích khách hàng lên trên lợi ích cá nhân.",
              "Đây chính là nguyên tắc **fiduciary duty** — nghĩa vụ trung thành với client.",
              "A sai vì **Standard I(A)** liên quan đến việc tuân thủ luật pháp, không trực tiếp nói về việc đặt lợi ích client lên trước.",
              "C sai vì **Standard VI(A)** liên quan đến **disclosure of conflicts** — tiết lộ xung đột lợi ích, không phải nguyên tắc đặt client lên trước."
            ]
          },
          {
            id: "q2",
            text: "A CFA charterholder discovers that a colleague is violating securities regulations. According to the Standards, what is the charterholder's FIRST step?",
            options: [
              { label: "A", text: "Report the violation to the CFA Institute immediately." },
              { label: "B", text: "Attempt to stop the violation by speaking with the colleague or through the firm's compliance procedures." },
              { label: "C", text: "Report the violation to the securities regulator." }
            ],
            correctAnswer: "B",
            explanation: [
              "**Standard I(A) – Knowledge of the Law**: Khi phát hiện vi phạm, bước ĐẦU TIÊN là cố gắng ngăn chặn hành vi vi phạm.",
              "Thứ tự hành động: (1) Nói chuyện với đồng nghiệp / thông qua compliance nội bộ => (2) Nếu không giải quyết được => (3) Báo cơ quan quản lý / CFA Institute.",
              "A và C sai vì báo cáo ngay cho CFA Institute hoặc regulator mà chưa thử giải quyết nội bộ => chưa tuân thủ đúng trình tự.",
              "Key principle: **Uphold the law** => nhưng trước tiên phải **attempt to stop** thông qua internal channels."
            ]
          }
        ]
      },
      {
        id: "ethics-reading-2",
        subjectId: "ethics",
        title: "Reading 2: Guidance for Standards I–VII",
        description: "Hướng dẫn chi tiết về cách áp dụng các Standard I đến VII trong thực tế.",
        questions: [
          {
            id: "q3",
            text: "An analyst receives material nonpublic information about a company. According to Standard II(A) – Material Nonpublic Information, which action is MOST appropriate?",
            options: [
              { label: "A", text: "Trade on the information before it becomes public." },
              { label: "B", text: "Share the information with trusted colleagues only." },
              { label: "C", text: "Refrain from trading and encourage public dissemination of the information." }
            ],
            correctAnswer: "C",
            explanation: [
              "**Standard II(A) – Material Nonpublic Information**: Khi sở hữu **material nonpublic information**, member KHÔNG được trade hoặc tiết lộ thông tin.",
              "Hành động đúng: **Refrain from trading** + khuyến khích **public dissemination** (phổ biến thông tin ra công chúng).",
              "A sai vì trade trên **material nonpublic information** => vi phạm trực tiếp Standard II(A).",
              "B sai vì chia sẻ cho dù chỉ với đồng nghiệp => vẫn là **tipping** => vi phạm Standard II(A)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "fixed-income",
    name: "Fixed Income",
    icon: "📊",
    readings: [
      {
        id: "fi-reading-1",
        subjectId: "fixed-income",
        title: "Reading 1: Bond Features & Bond Markets",
        description: "Tìm hiểu về các đặc điểm của trái phiếu và thị trường trái phiếu.",
        questions: [
          {
            id: "q4",
            text: "Which of the following bond covenants is considered a negative covenant?",
            options: [
              { label: "A", text: "Maintenance of collateral." },
              { label: "B", text: "No additional debt." },
              { label: "C", text: "Payment of taxes." }
            ],
            correctAnswer: "B",
            explanation: [
              "**Negative covenant** = điều khoản **hạn chế** hành động của issuer để bảo vệ bondholders.",
              "**\"No additional debt\"** => hạn chế phát hành thêm nợ => thuộc nhóm **negative covenant**.",
              "A và C sai vì => **Maintenance of collateral** và **Payment of taxes** => thuộc nhóm **affirmative (positive) covenants**.",
              "Phân biệt nhanh: **Negative** = KHÔNG được làm gì | **Affirmative** = PHẢI làm gì."
            ]
          },
          {
            id: "q5",
            text: "A bond with a par value of $1,000 pays a semi-annual coupon of $40. The bond's coupon rate is closest to:",
            options: [
              { label: "A", text: "4.0%" },
              { label: "B", text: "8.0%" },
              { label: "C", text: "10.0%" }
            ],
            correctAnswer: "B",
            explanation: [
              "**Coupon rate** = Tổng coupon hàng năm / **Par value**.",
              "Semi-annual coupon = $40 => Annual coupon = $40 × 2 = **$80**.",
              "Coupon rate = $80 / $1,000 = **0.08 = 8.0%**.",
              "A sai vì lấy $40/$1,000 = 4% => quên nhân 2 cho semi-annual.",
              "C sai vì không có cơ sở tính ra 10%."
            ]
          },
          {
            id: "q6",
            text: "Which type of bond gives the issuer the right to redeem the bond before maturity?",
            options: [
              { label: "A", text: "Put bond" },
              { label: "B", text: "Callable bond" },
              { label: "C", text: "Convertible bond" }
            ],
            correctAnswer: "B",
            explanation: [
              "**Callable bond** = issuer có quyền **redeem** (mua lại) bond trước maturity date.",
              "Lợi ích cho issuer: Khi interest rates giảm => issuer gọi bond cũ, phát hành bond mới với coupon thấp hơn.",
              "A sai vì **Put bond** = **bondholder** có quyền bán lại bond cho issuer trước maturity => quyền thuộc về investor, không phải issuer.",
              "C sai vì **Convertible bond** = bondholder có quyền chuyển đổi bond thành **common stock** => liên quan đến equity conversion, không phải early redemption."
            ]
          }
        ]
      },
      {
        id: "fi-reading-2",
        subjectId: "fixed-income",
        title: "Reading 2: Bond Pricing & Yield Measures",
        description: "Tìm hiểu về cách định giá trái phiếu và các thước đo lợi suất.",
        questions: [
          {
            id: "q7",
            text: "If a bond's yield to maturity (YTM) equals its coupon rate, the bond is priced at:",
            options: [
              { label: "A", text: "A premium (above par value)" },
              { label: "B", text: "Par value" },
              { label: "C", text: "A discount (below par value)" }
            ],
            correctAnswer: "B",
            explanation: [
              "**Quy tắc cơ bản**: Khi **YTM = Coupon rate** => Bond price = **Par value** (mệnh giá).",
              "YTM > Coupon rate => Bond bán **discount** (dưới mệnh giá).",
              "YTM < Coupon rate => Bond bán **premium** (trên mệnh giá).",
              "A sai vì premium xảy ra khi YTM < coupon rate.",
              "C sai vì discount xảy ra khi YTM > coupon rate."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "quantitative",
    name: "Quantitative Methods",
    icon: "📐",
    readings: [
      {
        id: "quant-reading-1",
        subjectId: "quantitative",
        title: "Reading 1: Time Value of Money",
        description: "Tìm hiểu về giá trị thời gian của tiền tệ - nền tảng của mọi phép tính tài chính.",
        questions: [
          {
            id: "q8",
            text: "An investor deposits $10,000 today in an account that pays 6% annual interest, compounded monthly. The future value after 5 years is closest to:",
            options: [
              { label: "A", text: "$13,000" },
              { label: "B", text: "$13,489" },
              { label: "C", text: "$13,490" }
            ],
            correctAnswer: "C",
            explanation: [
              "**Công thức FV**: FV = PV × (1 + r/n)^(n×t)",
              "PV = $10,000 | r = 6% = 0.06 | n = 12 (monthly) | t = 5 years.",
              "FV = $10,000 × (1 + 0.06/12)^(12×5) = $10,000 × (1.005)^60.",
              "(1.005)^60 ≈ **1.34885** => FV ≈ **$13,489**.",
              "A sai vì có thể dùng simple interest hoặc tính sai số kỳ.",
              "Lưu ý: **Compounded monthly** => phải chia rate cho 12 và nhân số kỳ cho 12."
            ]
          },
          {
            id: "q9",
            text: "The effective annual rate (EAR) for a stated rate of 12% compounded quarterly is closest to:",
            options: [
              { label: "A", text: "12.00%" },
              { label: "B", text: "12.55%" },
              { label: "C", text: "12.68%" }
            ],
            correctAnswer: "B",
            explanation: [
              "**EAR** = (1 + r/n)^n - 1",
              "r = 12% = 0.12 | n = 4 (quarterly).",
              "EAR = (1 + 0.12/4)^4 - 1 = (1.03)^4 - 1.",
              "(1.03)^4 = 1.1255 => EAR = **12.55%**.",
              "A sai vì 12% là **stated rate (APR)**, không phải EAR. EAR luôn ≥ APR khi compounding frequency > 1.",
              "C sai vì 12.68% = EAR của 12% compounded **monthly** (n=12), không phải quarterly."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "equity",
    name: "Equity Investments",
    icon: "📈",
    readings: [
      {
        id: "eq-reading-1",
        subjectId: "equity",
        title: "Reading 1: Market Organization & Structure",
        description: "Tìm hiểu về tổ chức và cấu trúc của thị trường vốn.",
        questions: [
          {
            id: "q10",
            text: "Which of the following is a characteristic of a dealer market?",
            options: [
              { label: "A", text: "Orders are matched using a central limit order book." },
              { label: "B", text: "Dealers stand ready to trade at quoted prices (bid and ask)." },
              { label: "C", text: "All trades are executed through a physical exchange floor." }
            ],
            correctAnswer: "B",
            explanation: [
              "**Dealer market** = các **dealer** (market makers) **đứng sẵn sàng giao dịch** tại mức giá họ niêm yết (**bid** và **ask**).",
              "Dealer **profits from the bid-ask spread** => chênh lệch giữa giá mua và giá bán.",
              "A sai vì **central limit order book** => đặc trưng của **order-driven market** (sàn giao dịch khớp lệnh).",
              "C sai vì dealer market thường là **electronic/OTC**, không cần physical exchange floor. Ví dụ: **NASDAQ**."
            ]
          }
        ]
      }
    ]
  }
];

// Helper functions
export function getAllReadings(): { subject: Subject; reading: Reading }[] {
  const result: { subject: Subject; reading: Reading }[] = [];
  cfaData.forEach(subject => {
    subject.readings.forEach(reading => {
      result.push({ subject, reading });
    });
  });
  return result;
}

export function getReadingById(readingId: string): { subject: Subject; reading: Reading } | null {
  for (const subject of cfaData) {
    for (const reading of subject.readings) {
      if (reading.id === readingId) {
        return { subject, reading };
      }
    }
  }
  return null;
}

export function getTotalQuestions(): number {
  let total = 0;
  cfaData.forEach(subject => {
    subject.readings.forEach(reading => {
      total += reading.questions.length;
    });
  });
  return total;
}
