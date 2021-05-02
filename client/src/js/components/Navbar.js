import { 
    SearchOutlined, 
    HomeOutlined , 
    FlagOutlined,
    PlaySquareOutlined,
    ShopOutlined, 
    UserOutlined,
    PlusOutlined,
    WechatOutlined,
    BellOutlined
} from '@ant-design/icons'
import { Avatar } from 'antd';


function Navbar() {
    return (
        <div className='header__container flex justify-between p-3 sticky top-0 z-50 bg-gray-900 shadow-lg'>
            <div className='header__left items-center flex justify-evenly' >
                <img
                className='h-10 m-3 '
                 src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=40&h=40'
                 alt='logo'
                />

                <div className='header__input flex items-center bg-gray-300 p-2.5 ml-2.5 rounded-full'>
                 <SearchOutlined className='text-2xl text-grey-400' />
                 <input className='border-0 outline-none bg-transparent ' type='text' placeholder='Search Facebook Clone' />
                </div>
            </div>

            <div className='header__center flex justify-center '>
                <div className='header__option text-4xl hover:bg-gray-700 rounded-3xl items-center m-3  px-8'>
                  <HomeOutlined className='text-gray-300 hover:text-blue-500 ' />
                </div>
                <div className='header__option text-4xl hover:bg-gray-700 rounded-3xl items-center m-3  px-8'>
                  <FlagOutlined className='text-gray-300 hover:text-blue-500'  />
                </div>
                <div className='header__option text-4xl hover:bg-gray-700 rounded-3xl items-center m-3   px-8'>
                  <PlaySquareOutlined className='text-gray-300 hover:text-blue-500'/>
                </div>
                <div className='header__option text-4xl hover:bg-gray-700 rounded-3xl items-center m-3  px-8'>
                  <ShopOutlined className='text-gray-300 hover:text-blue-500'/>
                </div>
                <div className='header__option text-4xl hover:bg-gray-700 rounded-3xl items-center m-3  px-8 '>
                  <UserOutlined className='text-gray-300 hover:text-blue-500 ' />
                </div>
            </div>

            <div className='hearder__right flex'>
                {/* <div className='header__info flex items-center'>
                    <Avatar 
                     src='' // the user's google account profice picture/or the one the user has set
                     size={40}
                     >
                         user
                     </Avatar>

                     <h4> username </h4>
                </div> */}

                <PlusOutlined className='text-4xl text-gray-300 m-3  p-2  hover:text-blue-500' />
                <WechatOutlined className='text-4xl text-gray-300 m-3  p-2  hover:text-blue-500'/>
                <BellOutlined className='text-4xl text-gray-300 m-3  p-2  hover:text-blue-500' />
            </div>
        </div>
    )
}

export default Navbar
