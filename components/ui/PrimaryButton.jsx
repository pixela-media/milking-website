import React from 'react'

const PrimaryButton = ({
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
        background: 'linear-gradient(to top, #7C4098, #9B5AB3)',
        border: 'none',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        outline: 'none',
        opacity: disabled ? 0.6 : 1,
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
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 4px 12px rgba(124, 64, 152, 0.4)'
        }
    }

    const handleMouseLeave = (e) => {
        if (!disabled) {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
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

export default PrimaryButton