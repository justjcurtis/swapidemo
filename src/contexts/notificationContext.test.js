import React from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NotificationContext, NotificationProvider } from './notificationContext'

test("Notify creates notifications available in notification context", async () => {
    let notifyHandle = null
    const TestComponent = () => {
        const { notifications, notify } = React.useContext(NotificationContext)
        notifyHandle = notify
        return (
            <div>
                {notifications.map((notification, index) => (
                    <div key={index}>
                        <p>{notification.message}</p>
                        <p>{notification.type}</p>
                    </div>
                ))}
            </div>
        )
    }

    const { rerender } = render(
        <NotificationProvider>
            <TestComponent />
        </NotificationProvider>
    )

    act(() => {
        notifyHandle('test notification', 'warning')
    })

    rerender(
        <NotificationProvider>
            <TestComponent />
        </NotificationProvider>
    )
    await waitFor(() => {
        expect(screen.queryAllByText('test notification').length > 0).toBe(true)
        expect(screen.queryAllByText('warning').length > 0).toBe(true)
    })
})

