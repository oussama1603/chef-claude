import robot from '/src/assets/roboto.webp'

export default function Header(){
  return(
    <nav className="Header">
      <img src={robot} alt="robot logo" width="7%" />
      <h2>Chef claude</h2>
    </nav>
  )
}