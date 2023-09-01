import logo from 'assets/images/criai_chat_logo.png'
import logoDark from 'assets/images/criai_chat_logo_dark.png'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 50 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Criai Chat'
            />
        </div>
    )
}

export default Logo
