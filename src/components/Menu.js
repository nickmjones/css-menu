import { 
  UserCircleIcon, 
  TruckIcon, 
  ShoppingCartIcon, 
  ReceiptRefundIcon,
  LocationMarkerIcon,
  ShieldCheckIcon, 
  PhoneIcon,
  LogoutIcon,
  UserIcon 
} from "@heroicons/react/outline"

const Menu = () => {
  return(
    <div className="bg-indigo-900 w-screen h-screen p-6 z-10">
      <div className="flex flex-row items-center">
        <UserCircleIcon className="h-8 w-8 text-white mr-2"/>
        <div className="font-bold text-white text-xl">Macbeth</div>
      </div>

      <ul className="text-white mt-10 font-medium text-xl">
        <li className="flex flex-row items-center mb-8">
          <TruckIcon className="h-5 w-5 text-white mr-2" />
          Delivery
        </li>
        <li className="flex flex-row items-center mb-8">
          <ShoppingCartIcon className="h-5 w-5 text-white mr-2" />
          Shopping Cart
        </li>
        <li className="flex flex-row items-center mb-8">
          <ReceiptRefundIcon className="h-5 w-5 text-white mr-2" />
          Receipt
        </li>
        <li className="flex flex-row items-center mb-8">
          <UserIcon className="h-5 w-5 text-white mr-2" />
          My Information
        </li>
        <li className="flex flex-row items-center mb-8">
          <LocationMarkerIcon className="h-5 w-5 text-white mr-2" />
          Locate Store
        </li>
        <li className="flex flex-row items-center mb-8">
          <ShieldCheckIcon className="h-5 w-5 text-white mr-2" />
          Security
        </li>
        <li className="flex flex-row items-center mb-16">
          <PhoneIcon className="h-5 w-5 text-white mr-2" />
          Customer Support
        </li>
        <li className="flex flex-row items-center text-orange-500">
          <LogoutIcon className="h-5 w-5 mr-2" />
          Logout
        </li>
      </ul>
    </div>
  )
}

export default Menu