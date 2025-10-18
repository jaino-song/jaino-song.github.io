import { AccordionDemo } from "../components/Accordion";

export default function Info() {
  const dataList = [
    {
      title: "Item 1",
      content: "Content 1",
    },
    {
      title: "Item 2",
      content: "Content 2",
    },
    {
      title: "Item 3",
      content: "Content 3",
    },
  ];
  return (
    <main className="min-h-screen p-8">
      <AccordionDemo dataList={dataList} />
    </main>
  );
}

