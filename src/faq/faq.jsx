import "./faq.css";
import {useState} from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function Faq() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}



function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null)

  return (
    <>
  <h1 style={{borderTop: '4px solid black'}} > FAQ TOGGLE</h1>
  <div className='accordion'>
    {data.map((el, i) => (
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title={el.title}
        text={el.text}
        num={i + 1}
        key={i} />
    ))}
  </div>
    </>
  );
}


function AccordionItem({num, title, text, curOpen, onOpen}) {

const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num)
  }

  return  <div className={`item ${isOpen ? 'open' : ''}`}
          onClick={handleToggle}
  >
      <p className='number'>{num < 9 ? `0${num}` : num}</p>
      <p className='text'>{title}</p>
      <p className='icon'>{ isOpen ? '-' : '+'}</p>
    {isOpen && <div className='content-box'>{text}</div>}
  </div>
}