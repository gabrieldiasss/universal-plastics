
import { RiDashboardLine, RiSearch2Line, RiNotification2Line, RiSendPlaneLine, RiSettings3Fill} from 'react-icons/ri'
import { Container } from './styles'

export default function Sidebar() {

    return (
        <Container>
            <img src="/images/logo.png" alt="" />

            <nav>
                <li> <RiDashboardLine/> Feed</li>
                <li> <RiSearch2Line/> Explore</li>
                <li> <RiSendPlaneLine /> Direct</li>
                <li> <RiNotification2Line /> Notifications</li>
                <li> <RiSettings3Fill /> Settings</li>
            </nav>

        </Container>
    )
}