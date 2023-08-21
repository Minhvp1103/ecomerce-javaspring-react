import icons from "./icons";
import { path } from "./constant";

const { AiOutlineHeart, BsPersonPlus, RiLoginBoxLine } = icons;
const headerLink = [
  {
    id: 1,
    icon: <AiOutlineHeart />,
    desc: "Yêu Thích",
    // path: path.HEART,
  },
  {
    id: 2,
    icon: <RiLoginBoxLine />,
    desc: "Đăng Nhập",
    path: path.LOGIN,
  },
  {
    id: 3,
    icon: <BsPersonPlus />,
    desc: "Đăng Ký",
    path: path.REGISTER,
  },
];
export default headerLink;
