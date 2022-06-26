import { useAppSelector, useAppDispatch } from '../../Redux/hooks';
import { selectProduct ,fetchProductById } from '../../Redux/Entities/Product';
import { AppUseParam } from '../../Route';


export const readTargetId = () =>{
    let { id } = AppUseParam();
    let targetId = (id === undefined )
    ? 2
    : Number(id);
    return targetId;
    
}
