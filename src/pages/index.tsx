
import { Comp1 } from './Components/comp1';
import { Comp2 } from './comp2';
import { Comp3 } from './Components/comp3';
import styles from './index.less'

export default function Page() {
  return (
    <div>
      <h2 className={styles.Title}>Yay! Welcome to umi!</h2>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Comp2></Comp2>
      <Comp2></Comp2>
      <Comp3></Comp3>
    </div>
  );
}
