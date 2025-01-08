export default defineAppConfig({
  ui: {
    primary: "lime",
    notifications: {
      // Show toasts at the top right of the screen
      position: "top-0 bottom-auto",
    },
    formGroup: {
      error: "absolute mt-1 text-xs",
      label: { base: "text-gray-3 text-sm" },
      wrapper: "mt-6",
      container: "mt-1",
    },

    input: {
      padding: { md: "py-3 px-4" },
      rounded: "rounded-xl",
      size: { md: "text-base" },
      base: "text-gray-4 font-medium",

      color: {
        white: {
          outline: "dark:bg-slate-800",
        },
      },
    },

    slideover: {
      overlay: {
        background: "bg-gray-700/75",
      },
    },

    dropdown: {
      width: 'w-56',
      padding: "p-2",
      rounded: 'rounded-2xl',
      item: {
        base: 'gap-4 mt-1 first:mt-0',
        active: 'text-black',
        inactive: 'text-gray-4',
        padding: 'py-2.5 px-2.5'
      }
    }
  },
});
