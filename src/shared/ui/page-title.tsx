import { Flex, Typography } from "antd"

interface TitleProps{ 
    title: string,
    shortDesc?: string,
}
const PageTitle = ({title,shortDesc}:TitleProps) => {
  return (
   <Flex vertical className="pb-10">
    <Typography.Title level={2}>{title}</Typography.Title>
    <Typography.Text className="mainFont text-[var(--txt-gray)]">{shortDesc}</Typography.Text>
   </Flex>
  )
}

export default PageTitle