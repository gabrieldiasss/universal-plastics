import { BottomMenuSection } from './styles'
import { RiDashboardLine, RiSearch2Line, RiNotification2Line, RiSendPlaneLine, RiSettings3Fill} from 'react-icons/ri'
import Link from 'next/link'


export function BottomMenu() {

    return (
        <BottomMenuSection>
            <Link href="/" >
                <RiDashboardLine />
            </Link>
            
        
            <RiSearch2Line />
        
            <RiNotification2Line  />

            <RiSendPlaneLine />

            <RiSettings3Fill />
        </BottomMenuSection>
    )
}