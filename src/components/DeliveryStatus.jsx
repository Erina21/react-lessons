
function OrderCard({ order, status }) {
    return (
        <div className="task-card">
            <h3>Order: {order}</h3>
            <p>
                {status === 'pending'
                    ? 'Your order is pending'
                    : status === 'on-the-way'
                        ? 'Your order is on the way'
                        : 'Your order has been delivered'}
            </p>
        </div>
    )
}

export default OrderCard