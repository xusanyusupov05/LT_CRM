import { Flex, Typography } from "antd"


interface TitleProps{ 
    title: string,
    shortDesc?: string,
}
const PageTitle = ({title,shortDesc}:TitleProps) => {
  return (
   <Flex justify="space-between" align="end"  className="pb-5  pt-5">
    <Flex vertical>
    <Typography.Text className="mainFont text-3xl font-semibold">{title}</Typography.Text>
    <Typography.Text className="mainFont text-[var(--txt-gray)]">{shortDesc}</Typography.Text>
    </Flex>
   </Flex>
  )
}

export default PageTitle