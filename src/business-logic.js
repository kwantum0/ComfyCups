/*************************************
 * list valid STATES and TRANSITIONS *
 *************************************/
// Intermediate States 
const GET_ANOTHER_SIZE = Symbol('find-given-size'), // continue to cached state
  NO_SIZE_FOUND = Symbol('no-sizing-found'),   // continue to exit survey
  OUT_OF_RANGE = Symbol('size-not-supported'), // continue to exit survey
  SHAPE_MISMATCH = Symbol('bad-shape');       // continue to exit survey
// Exit State
const EXIT_SURVEY = Symbol('exit-screen');
// Sizing States
  // Initial State
const CHOOSE_A_SIZE = Symbol('select-a-size'),
  CONTINUE_TO_SIZING = Symbol('continue');
  // Step 1: Band Testing 
const TEST_BAND_LOOSEST = Symbol('test-band-loosest-setting'),
  LOOSEST_IS_TIGHT = Symbol('inc-band-and-repeat'),
  LOOSEST_IS_COMFY = Symbol('continue');
const TEST_BAND_TIGHTEST = Symbol('test-band-tightest-setting'),
  TIGHTEST_IS_TIGHT  = Symbol('dec-band-and-repeat'),
  TIGHTEST_IS_COMFY = Symbol('continue');
  // Step 2: Scoop & Swoop
const TEST_CUP_OVERFLOW = Symbol('test-cup-overflow-or-gap'),
  CUP_OVERFLOW = Symbol('inc-cup-2-and-repeat'),
  CUP_GAPPING = Symbol('dec-cup-and-repeat'), // set gapping-flag
  CUP_PERFECT = Symbol('continue');
  // Step 3: Gore
const TEST_CUP_TACKING = Symbol('test-that-gore-is-tacking'),
  GORE_GAPPING = Symbol('change-cup-and-repeat-from-2') // check gapping-flag
  GORE_TACKS = Symbol('continue');
  // Step 4: Wire Width
const TEST_CUP_WIRE = Symbol('test-cup-wire-width'),
  WIRE_ON_TISSUE = Symbol('inc-cup-and-repeat-from-2'),
  WIRE_GAPPING = Symbol('dec-cup-and-repeat-from-2'),
  WITE_PERFECT = Symbol('continue');
  // Exit States 
const SIZE_FOUND = Symbol('good-sizing-found'),
  CONTINUE_TO_FITING = Symbol('continue'),
  EXIT_EARLY = Symbol('goto-exit-survey');
// Fitting States
  // Step 5: Fit Issues
const CHECK_WRINKLES = Symbol('are-there-wrinkles'),
  IMF_WRINKLES = Symbol('wrinkles-under-cup'),    // incl. substate
    RESCOOP_WORKS = Symbol('next-issue'),
    RESCOOP_DOESNT_WORK = Symbol('goto-shape-mismatch'),
  STRAP_WRINKLES = Symbol('wrinkles-by-straps'),  // incl. substate
    LOOSEING_WORKS = Symbol('next-issue'),
    LOOSEING_DOESNT_WORK = Symbol('goto-shape-mismatch');
  // Step 6: Comfort Issues
const PAIN_POINTS = Symbol('what-is-uncomfortable'),
  STRAP_HURTS = Symbol('strap-hurts'),            // incl. substate
  GORE_HURTS = Symbol('gore-hurts'),              // incl. substate
  ARMPIT_HURTS = Symbol('armpit-hurts'),          // incl. substate
  UNDER_BOOB_HURTS = Symbol('under-boob-hurts');  // incl. substate


class braSizingFSM {
  constructor(jumpState, ...data) {
    this.currentState = jumpState || this.initalState;
  }
}

export braSizingFSM;