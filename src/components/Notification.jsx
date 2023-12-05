
function Notification( { showNotifications } ) {
  return (
    <>
    {/*  this is a comment
    //* if showNotifications is true, 'show' is added to the className, else nothing is added.
    */}
    <div className={`notification-container ${showNotifications ? 'show' : ''}`}>
      <p>You have already entered this letter!</p>
    </div>
    </>
  )
}

export default Notification;