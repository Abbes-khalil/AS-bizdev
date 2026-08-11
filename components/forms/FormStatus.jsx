const StatusIcon = ({ state }) => {
  if (state === "success") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8L6.5 11.5L13 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (state === "error" || state === "failed") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 5V8.5M8 11V11.01"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (state === "submitting") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="animate-spin"
      >
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="20"
          strokeDashoffset="10"
        />
      </svg>
    );
  }

  return null;
};

const TONES = {
  success: "border-gray-200 bg-surface-alt text-navy",
  error: "border-orange/30 bg-orange-50 text-orange",
  failed: "border-orange/30 bg-orange-50 text-orange",
  submitting: "border-gray-200 bg-surface-alt text-gray-700",
};

/**
 * Live region announcing submission state. When sending fails it also renders
 * the pre-filled mailto fallback so the visitor can still reach us.
 */
const FormStatus = ({ status, fallbackLabel }) => (
  <div
    id="form-status"
    role="status"
    aria-live="polite"
    className={`mt-6 rounded-btn border px-4 py-3 text-sm ${TONES[status.state] ?? "hidden"}`}
  >
    <span className="flex items-start gap-2">
      <span className="mt-[0.15rem] shrink-0">
        <StatusIcon state={status.state} />
      </span>
      <span>
        {status.message}
        {status.mailto && (
          <>
            {" "}
            <a
              href={status.mailto}
              className="font-semibold underline underline-offset-2 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded"
            >
              {fallbackLabel}
            </a>
          </>
        )}
      </span>
    </span>
  </div>
);

export default FormStatus;
