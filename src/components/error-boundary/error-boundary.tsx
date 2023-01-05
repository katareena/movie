import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <p className='page__error'>
          Oops, something went wrong... We are doing our best to fix the issue!
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
