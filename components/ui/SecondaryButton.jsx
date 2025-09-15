import React from 'react'

const SecondaryButton = ({
    children,
    onClick,
    type = "button",
    disabled = false,
    size = "medium",
    className = "",
    icon,
    iconPosition = "left",
    ...props
}) => {

    const sizeStyles = {
        small: {
            padding: '8px 16px',
            fontSize: '14px',
            gap: '6px'
        },
        medium: {
            padding: '12px 24px',
            fontSize: '16px',
            gap: '8px'
        },
        large: {
            padding: '16px 32px',
            fontSize: '18px',
            gap: '10px'
        }
    }

    const buttonStyles = {
        background: 'transparent',
        border: '2px solid #9B5AB3',
        borderRadius: '8px',
        color: '#9B5AB3',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        outline: 'none',
        opacity: disabled ? 0.5 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sizeStyles[size]
    }

    const iconStyles = {
        width: sizeStyles[size].fontSize,
        height: sizeStyles[size].fontSize,
        flexShrink: 0
    }

    const handleMouseEnter = (e) => {
        if (!disabled) {
            e.target.style.backgroundColor = '#9B5AB3'
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 4px 12px rgba(155, 90, 179, 0.3)'

            // Change icon color on hover if it's an SVG
            const iconElement = e.target.querySelector('svg')
            if (iconElement) {
                iconElement.style.fill = 'white'
                iconElement.style.stroke = 'white'
            }
        }
    }

    const handleMouseLeave = (e) => {
        if (!disabled) {
            e.target.style.backgroundColor = 'transparent'
            e.target.style.color = '#9B5AB3'
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'

            // Reset icon color
            const iconElement = e.target.querySelector('svg')
            if (iconElement) {
                iconElement.style.fill = '#9B5AB3'
                iconElement.style.stroke = '#9B5AB3'
            }
        }
    }

    return (
        <button
            type={type}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            style={buttonStyles}
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {icon && iconPosition === 'left' && (
                <span style={iconStyles}>{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <span style={iconStyles}>{icon}</span>
            )}
        </button>
    )
}

export default SecondaryButton