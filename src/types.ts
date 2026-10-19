export interface ConfigOptions {
  /**
   * Core JavaScript rules. Can't be disabled.
   * @default true
   */
  javascript?: boolean;
  /**
   * Activate TypeScript rules.
   * @default false
   */
  typescript?: boolean;
  /**
   * Activate HTML rules.
   * @default false
   */
  html?: boolean;
  /**
   * Activate rules related to imports.
   * @default false
   */
  imports?: boolean;
  /**
   * Activate stylistic rules.
   * @default false
   */
  stylistic?: boolean;
  /**
   * Activate SuiteScript rules.
   * @default false
   */
  suitescript?: boolean;
  /**
   * Ignore specific files or patterns.
   * @default []
   */
  ignores?: string[];
}