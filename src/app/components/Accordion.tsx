import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  interface AccordionItemList {
    title: string;
    content: string;
  }

  interface AccordionProps {
    dataList: AccordionItemList[];
  }
  
  export function AccordionDemo({ dataList }: AccordionProps) {
    return (
      <Accordion
        type="single"
        className="w-full"
        defaultValue={dataList[0].title}
      >
        {dataList.map((item) => (
			<AccordionItem key={item.title} value={item.title}>
				<AccordionTrigger>{item.title}</AccordionTrigger>
				<AccordionContent>{item.content}</AccordionContent>
			</AccordionItem>
		))}
	</Accordion>
);
}