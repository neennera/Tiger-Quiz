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
        question : "เสือตัวนั้นจ้องประจันหน้ากับคุณ คุณจะ...",
        answer : [
            {option : "จ้องหน้าดูเชิง", point : [0,1]},
            {option : "ต่อสู้สิ", point : [1,0]},
            {option : "กรี๊ดออกมาดังๆ", point : [0,0]},
            {option : "แกล้งตาย", point : [0,0]},
        ]
    },
    {
        question : "หมีไม่สนใจการขู่ของคุณ คุณเลยหยิบอาวุธขึ้นมา นั่นคือ..",
        answer : [
            {option : "ถือไม้", point : [1,1]},
            {option : "หยิบปืน", point : [2,0]},
            {option : "หมัดนี่แหละ", point : [0,0]},
            {option : "อ้อมกอดแสนอบอุ่น", point : [0,2]},
        ]
    },
    {
        question : "หมีตกใจเล็กน้อย คุณจึงตัดสินใจ",
        answer : [
            {option : "กระโจนไปหาอย่างว่องไว", point : [1,0]},
            {option : "ค่อยๆเข้าไปลูบหัวหมี", point : [0,2]},
            {option : "ทำร้ายหมีให้สลบ", point : [2,0]},
            {option : "แกล้งตายดีกว่า", point : [0,0]},
        ]
    }
]