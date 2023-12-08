import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <h1 className="font-bold">Auth App</h1>
            <ul className="flex gap-4 font-medium">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/signin'>SignIn</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
                {/* <li>Home</li> */}
            </ul>
        </div>
    </div>
  )
}

export default Header