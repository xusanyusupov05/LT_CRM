import { Button, Flex, Typography } from 'antd'
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons'

interface TopContentProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}
const TopContent = ({ collapsed, setCollapsed }: TopContentProps) => {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        gap={10}
        className={`relative p-4 transition-all duration-200 h-20`}
      >
        {
          !collapsed ? (
            <Typography.Text className="secondaryFont font-bold text-[var(--primary)] text-lg leading-tight">
              Binary Bridge
            </Typography.Text>
          ) 
          :
          (
            <Flex vertical gap={3} className='mt-20'>
              <Typography.Text className="secondaryFont font-bold text-[var(--saturated-success)] text-lg leading-tight">
              B
              </Typography.Text>
              <Typography.Text className="secondaryFont font-bold text-[var(--saturated-success)] text-lg leading-tight">
              B
              </Typography.Text>
              <Typography.Text className="secondaryFont font-bold text-[var(--saturated-success)] text-lg leading-tight">
              -
              </Typography.Text>
              <Typography.Text className="secondaryFont font-bold text-[var(--saturated-success)] text-lg leading-tight">
              2
              </Typography.Text>
              <Typography.Text className="secondaryFont font-bold text-[var(--saturated-success)] text-lg leading-tight">
              3
              </Typography.Text>
              <Typography.Text className="secondaryFont font-bold text-[var(--saturated-success)] text-lg leading-tight">
              4
              </Typography.Text>
            </Flex>
          )
        }
        <Button
          type="text"
          icon={collapsed ? <MenuOutlined /> : <MenuFoldOutlined style={{fontSize: '18px'}}/>}
          onClick={() => setCollapsed(!collapsed)}
          style={{color: 'var(--primary)'}}
          className={`absolute w-full ${
            collapsed 
              ? "-bottom-32 left-1/2 -translate-x-1/2" 
              : "top-7 right-2"
          } z-10 hover:text-[var(--primary)] transition-all`}
        />
      </Flex>
    </>
  );
};

export default TopContent