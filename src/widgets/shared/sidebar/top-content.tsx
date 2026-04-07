import { Button, Flex, Typography } from 'antd'
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons'
import { motion, AnimatePresence } from 'framer-motion'

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
        <AnimatePresence mode="wait">
          {!collapsed ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Typography.Text className="secondaryFont font-bold text-[var(--main-color)] text-lg leading-tight text-nowrap">
                Binary Bridge
              </Typography.Text>
            </motion.div>
          ) 
          :
          (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Flex vertical gap={3} className='mt-20'>
                <Typography.Text className='secondaryFont font-bold text-[var(--main-color)] text-lg leading-tight'>B</Typography.Text>
                <Typography.Text className='secondaryFont font-bold text-[var(--main-color)] text-lg leading-tight'>B</Typography.Text>
                <Typography.Text className='secondaryFont font-bold text-[var(--main-color)] text-lg leading-tight'>-</Typography.Text>
                <Typography.Text className='secondaryFont font-bold text-[var(--main-color)] text-lg leading-tight'>2</Typography.Text>
                <Typography.Text className='secondaryFont font-bold text-[var(--main-color)] text-lg leading-tight'>3</Typography.Text>
                <Typography.Text className='secondaryFont font-bold text-[var(--main-color)] text-lg leading-tight'>4</Typography.Text>
              </Flex>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          type="text"
          icon={collapsed ? <MenuOutlined /> : <MenuFoldOutlined style={{fontSize: '18px'}}/>}
          onClick={() => setCollapsed(!collapsed)}
          style={{color: 'var(--main-color)'}}
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