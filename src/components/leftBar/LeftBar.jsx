import "./leftBar.scss"

export default function LeftBar() {
  return (
      <div className="leftBar">
        <div className="container">
          <div className="menu">
            <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <span>John Doe</span>
            </div>
            <div className="item">
              <img src="" alt="" />
              <span>Friends</span>
            </div>
          </div>
        </div>
      </div>
    )
}
