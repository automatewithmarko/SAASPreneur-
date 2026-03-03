export default function TopBar() {
  return (
    <div className="top-bar">
      <svg
        style={{ width: 14, height: 14, fill: 'none', stroke: '#000', strokeWidth: 2.5, verticalAlign: '-2px', marginRight: 2 }}
        viewBox="0 0 24 24"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      Applications close when spots are filled – <span>Only accepting 10 partners this round</span>
    </div>
  );
}
