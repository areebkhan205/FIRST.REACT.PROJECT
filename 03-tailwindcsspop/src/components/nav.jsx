
function Nav() {
    return (
        <nav className="flex h-[72px] ">
<div id="logo">
<img className="h-10" src="/assets/logo.nike.png" alt="logo" />
</div>
<ul>
  <li href="#">
  Menu
  </li>
  <li href="#">
Location
  </li>
  <li id="About" href="#">
About
  </li>
  <li href="#">
    Contact
  </li>
</ul>

<button id="bt" className="bg-red-600 p-1 font-medium rounded-sm">LOGIN</button>
   </nav>
    )
}

export default Nav
