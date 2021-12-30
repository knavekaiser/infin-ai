import React, { useEffect, forwardRef, useCallback } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ReactDOM, { createPortal } from "react-dom";

export const Modal = forwardRef(
  (
    {
      open,
      setOpen,
      children,
      className,
      onBackdropClick,
      backdropClass,
      style,
    },
    ref
  ) => {
    if (open) {
      return createPortal(
        <>
          <div
            className={`modalBackdrop ${backdropClass}`}
            onClick={(e) => {
              e.stopPropagation();
              onBackdropClick?.();
            }}
          />
          <div
            style={{ ...style }}
            ref={ref}
            className={`modal ${className || ""}`}
          >
            {children}
          </div>
        </>,
        document.querySelector("#portal")
      );
    }
    return null;
  }
);

export const Prompt = ({ className, type, message, btns, callback }) => {
  const cleanup = () =>
    ReactDOM.render(<></>, document.querySelector("#prompt"));
  const confirm = () => {
    callback();
    cleanup();
  };
  const decline = () => cleanup();
  ReactDOM.render(
    <>
      <div className={`promptBackdrop`} />
      <div className={`prompt ${className || ""}`}>
        <div className="content">
          <button className="clear close" onClick={decline}>
            <IoClose />
          </button>
          {type === "confirmation" && (
            <div className="label confirmation">
              <span className="svg">i</span>
              <span className="promptLabel">CONFIRMATION</span>
            </div>
          )}
          {type === "information" && (
            <div className="label information">
              <span className="svg">i</span>
              <span className="promptLabel">INFORMATION</span>
            </div>
          )}
          {type === "success" && (
            <div className="label success">
              <span className="svg">
                <FaCheck />
              </span>
              <span className="promptLabel">SUCCESS</span>
            </div>
          )}
          {type === "error" && (
            <div className="label error">
              <span className="svg">
                <IoClose />
              </span>
              <span className="promptLabel">ERROR</span>
            </div>
          )}
          <p className="question">{message}</p>
          <div className="actions">
            {btns || (
              <>
                {type === "confirmation" ? (
                  <>
                    <button
                      className="no btn secondary w-100"
                      onClick={decline}
                    >
                      No
                    </button>
                    <button
                      className="yes btn secondary w-100"
                      onClick={confirm}
                    >
                      Yes
                    </button>
                  </>
                ) : (
                  <button className="yes btn secondary w-100" onClick={decline}>
                    Ok
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>,
    document.querySelector("#prompt")
  );
};
