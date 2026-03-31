import { Flex, Typography } from "antd";

interface PersonalCardProps {
    icon: React.ReactNode;
    title: string;
    children?: React.ReactNode;
}
const PersonalCardWrapper = ({icon,title,children}:PersonalCardProps) => {
    return (
      <Flex
        vertical
        className="bg-[var(--bg-sec)] border pt-5 px-5  rounded-xl"
        gap={15}
      >
        <div className="flex items-center gap-2 pb-8 border-b ">
          {icon}
          <Typography.Text className="text-xl mainFont text-[var(--primary)] font-medium">{title}</Typography.Text>    
        </div>        
  
        {children}
      </Flex>
    )
  }

export default PersonalCardWrapper