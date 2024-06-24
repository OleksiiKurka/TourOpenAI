import Container from '@/src/components/ui/Container';
import styles from './SubscriptionPlanSection.module.scss';
import { subscription_plan } from './constants';

function SubscriptionPlanSection() {
  return (
    <Container className={styles.root}>
      <h2>Subscription Plan</h2>
      <div className={styles.subscription_plan_container}>
        {subscription_plan.map((item) => (
          <div key={item.title} className={styles[item.class]}>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            <ul>
              {item.list.map((element) => (
                <li><span>✓</span>{element}</li>
              ))}
            </ul>
            <button className={styles[item.button_class]}>Try now</button> 
            <div>
                <span className={styles[item.stripe]}></span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default SubscriptionPlanSection;
