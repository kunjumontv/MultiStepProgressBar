import "./App.css";
import MultiStepProgressBar from "./components/MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { questions } from "./Questions";
import MultiStepForm from "./components/MultiStepForm";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(1);
  const totalPagesCount = questions.length;
  const [pagesAnswers, setPagesAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index < 6) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };

  return (
    <div className="app">
      <Container className="h-100">
        <Row className="text-center">
          <Col>
            <p>
              <b>Basic Information</b>
            </p>
          </Col>
          <Col>
            <p>
              <b>Address Details</b>
            </p>
          </Col>
          <Col>
            <p>
              <b>Joining Details</b>
            </p>
          </Col>
          <Col>
            <p>
              <b>Qualification</b>
            </p>
          </Col>
          <Col>
            <p>
              <b>Experience</b>
            </p>
          </Col>
          <Col>
            <p>
              <b>Documents</b>
            </p>
          </Col>
        </Row>
        <Row className="h-100">
          <Col className="align-self-center d-flex justify-content-center">
            <MultiStepProgressBar step={index} />
          </Col>
        </Row>
        <Row>
          <Card className="mt-4 card__items">
            <Card.Body>
              <MultiStepForm
                step={index}
                list={questions}
                onPageUpdate={onPageAnswerUpdate}
                pagesAnswers={pagesAnswers}
              />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button
                disabled={index === 1}
                onClick={prevButton}
                className="vertical-align-middle"
              >
                <FaChevronLeft /> Prev
              </Button>
              <Button
                disabled={index === 6}
                onClick={nextButton}
                className="align-items-center"
              >
                {index === totalPagesCount ? "Submit" : "Next"}
                {index !== totalPagesCount && <FaChevronRight />}
              </Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
