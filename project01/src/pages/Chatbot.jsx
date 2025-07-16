import React from 'react'

const Chatbot = () => {
    const steps = [
        { id: '1', message: '안녕하세요! 무엇을 도와드릴까요?', trigger: '2' },
        { id: '2', options: [
            { value: '회원가입', label: '회원가입 안내', trigger: '3' },
            { value: '문의', label: '문의하기', trigger: '4' },
          ]
        },
        { id: '3', message: '회원가입은 이렇게 해요...', end: true },
        { id: '4', message: '문의는 이렇게...', end: true },
      ];
    
      return <ChatBot steps={steps} floating={true} />;
}

export default Chatbot