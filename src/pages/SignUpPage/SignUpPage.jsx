import { Tabs, Card } from "../../components";
import SignUpForm from "../../components/organisms/SignUpForm/SignUpForm";
import { CenteredCard } from "../../styles/utils/Card.style";
import { BodyWrapper } from "./SignUpPage";

const SignUpPage = () => (
    <CenteredCard>
        <Card.Header title="Sign Up" />
        <Card.Body>
            <BodyWrapper>
                <Tabs active="tab-1">
                    <div name="tab-1" text="Create New Account">
                        <SignUpForm />
                    </div>
                    <div name="tab-2">Content 2</div>
                    <div name="tab-3">Content 3</div>
                </Tabs>
            </BodyWrapper>
        </Card.Body>
    </CenteredCard>
);

export default SignUpPage;
