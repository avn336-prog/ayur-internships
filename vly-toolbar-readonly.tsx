/**
 * No-op stub for the vly.ai development toolbar.
 *
 * The original `vly-toolbar-readonly.tsx` ships only inside the vly.ai editor
 * and is not part of the deployable source, so it is absent from the repo.
 * This stub keeps the import in `src/main.tsx` valid and renders nothing in
 * production. Safe to delete once the `VlyToolbar` usage is removed.
 */
export function VlyToolbar() {
  return null;
}

export default VlyToolbar;
