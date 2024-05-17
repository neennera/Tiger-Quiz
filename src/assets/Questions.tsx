interface Answer {
  option: string;
  point: number[]; // huntScore, kindScore
}

interface QuestionItem {
  question: string;
  answer: Answer[];
}

export const Questions: QuestionItem[] = [
  {
    question: 'เสือตัวนั้นจ้องประจันหน้ากับคุณ คุณจะ...',
    answer: [
      { option: 'จ้องหน้าดูเชิง', point: [1, 1] },
      { option: 'ต่อสู้สิ', point: [1, 0] },
      { option: 'พยายามดูว่ามันบาดเจ็บไหม', point: [0, 1] },
      { option: 'แกล้งตาย', point: [0, 0] },
    ],
  },
  {
    question: 'เสือไม่สนใจการขู่ของคุณ คุณเลยหยิบอาวุธขึ้นมา นั่นคือ..',
    answer: [
      { option: 'ถือไม้', point: [1, 1] },
      { option: 'หยิบปืน', point: [2, 0] },
      { option: 'หมัดนี่แหละ', point: [0, 0] },
      { option: 'อ้อมกอดแสนอบอุ่น', point: [0, 2] },
    ],
  },
  {
    question: 'เสือตกใจเล็กน้อย คุณจึงตัดสินใจ',
    answer: [
      { option: 'กระโจนไปหาอย่างว่องไว', point: [1, 0] },
      { option: 'ค่อยๆเข้าไปลูบหัวเสือ', point: [0, 2] },
      { option: 'ทำร้ายเสือให้สลบ', point: [2, 0] },
      { option: 'แกล้งตายดีกว่า', point: [0, 0] },
    ],
  },
  {
    question: 'เสือตัวนั้นได้ล้มลง ในวินาทีสุดท้าย คุณเลือกที่จะ',
    answer: [
      { option: 'ยื่นมือให้เสือดม', point: [0, 1] },
      { option: 'ยื่นมือเข้าไปใกล้ๆปากเสือ', point: [-1, -1] },
      { option: 'อัดเสือให้ลุกอีกไม่ได้', point: [1, 0] },
      { option: 'รีบเดินออกไป', point: [0, 0] },
    ],
  },
];
