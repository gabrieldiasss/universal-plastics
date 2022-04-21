import { BottomMenuSection } from './styles'
import { RiDashboardLine, RiSearch2Line, RiNotification2Line, RiSendPlaneLine, RiSettings3Fill} from 'react-icons/ri'


export function BottomMenu() {

    return (
        <BottomMenuSection>
            <RiDashboardLine />
        
            <RiSearch2Line />
        
            <RiNotification2Line  />

            <RiSendPlaneLine />

            <RiSettings3Fill />
        </BottomMenuSection>
    )
}