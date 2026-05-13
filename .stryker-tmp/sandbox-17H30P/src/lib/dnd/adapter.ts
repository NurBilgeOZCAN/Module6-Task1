// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { arrayMove } from '@dnd-kit/sortable';
import { BoardState } from '../../types';
export const findColumnOfTask = (columns: BoardState['columns'], taskId: string) => {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    return columns.find(stryMutAct_9fa48("1") ? () => undefined : (stryCov_9fa48("1"), col => col.taskIds.includes(taskId)));
  }
};
export const moveTask = (state: BoardState, activeId: string, overId: string): BoardState => {
  if (stryMutAct_9fa48("2")) {
    {}
  } else {
    stryCov_9fa48("2");
    const activeColumn = findColumnOfTask(state.columns, activeId);
    const overColumn = stryMutAct_9fa48("5") ? state.columns.find(col => col.id === overId) && findColumnOfTask(state.columns, overId) : stryMutAct_9fa48("4") ? false : stryMutAct_9fa48("3") ? true : (stryCov_9fa48("3", "4", "5"), state.columns.find(stryMutAct_9fa48("6") ? () => undefined : (stryCov_9fa48("6"), col => stryMutAct_9fa48("9") ? col.id !== overId : stryMutAct_9fa48("8") ? false : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8", "9"), col.id === overId))) || findColumnOfTask(state.columns, overId));
    if (stryMutAct_9fa48("12") ? !activeColumn && !overColumn : stryMutAct_9fa48("11") ? false : stryMutAct_9fa48("10") ? true : (stryCov_9fa48("10", "11", "12"), (stryMutAct_9fa48("13") ? activeColumn : (stryCov_9fa48("13"), !activeColumn)) || (stryMutAct_9fa48("14") ? overColumn : (stryCov_9fa48("14"), !overColumn)))) return state;
    const activeIndex = activeColumn.taskIds.indexOf(activeId);
    const overIndex = overColumn.taskIds.indexOf(overId);
    const newColumns = state.columns.map(col => {
      if (stryMutAct_9fa48("15")) {
        {}
      } else {
        stryCov_9fa48("15");
        if (stryMutAct_9fa48("18") ? col.id === activeColumn.id || col.id === overColumn.id : stryMutAct_9fa48("17") ? false : stryMutAct_9fa48("16") ? true : (stryCov_9fa48("16", "17", "18"), (stryMutAct_9fa48("20") ? col.id !== activeColumn.id : stryMutAct_9fa48("19") ? true : (stryCov_9fa48("19", "20"), col.id === activeColumn.id)) && (stryMutAct_9fa48("22") ? col.id !== overColumn.id : stryMutAct_9fa48("21") ? true : (stryCov_9fa48("21", "22"), col.id === overColumn.id)))) {
          if (stryMutAct_9fa48("23")) {
            {}
          } else {
            stryCov_9fa48("23");
            return stryMutAct_9fa48("24") ? {} : (stryCov_9fa48("24"), {
              ...col,
              taskIds: arrayMove(col.taskIds, activeIndex, overIndex)
            });
          }
        }
        if (stryMutAct_9fa48("27") ? col.id !== activeColumn.id : stryMutAct_9fa48("26") ? false : stryMutAct_9fa48("25") ? true : (stryCov_9fa48("25", "26", "27"), col.id === activeColumn.id)) {
          if (stryMutAct_9fa48("28")) {
            {}
          } else {
            stryCov_9fa48("28");
            return stryMutAct_9fa48("29") ? {} : (stryCov_9fa48("29"), {
              ...col,
              taskIds: stryMutAct_9fa48("30") ? col.taskIds : (stryCov_9fa48("30"), col.taskIds.filter(stryMutAct_9fa48("31") ? () => undefined : (stryCov_9fa48("31"), id => stryMutAct_9fa48("34") ? id === activeId : stryMutAct_9fa48("33") ? false : stryMutAct_9fa48("32") ? true : (stryCov_9fa48("32", "33", "34"), id !== activeId))))
            });
          }
        }
        if (stryMutAct_9fa48("37") ? col.id !== overColumn.id : stryMutAct_9fa48("36") ? false : stryMutAct_9fa48("35") ? true : (stryCov_9fa48("35", "36", "37"), col.id === overColumn.id)) {
          if (stryMutAct_9fa48("38")) {
            {}
          } else {
            stryCov_9fa48("38");
            const newTaskIds = stryMutAct_9fa48("39") ? [] : (stryCov_9fa48("39"), [...col.taskIds]);
            const insertIndex = (stryMutAct_9fa48("43") ? overIndex < 0 : stryMutAct_9fa48("42") ? overIndex > 0 : stryMutAct_9fa48("41") ? false : stryMutAct_9fa48("40") ? true : (stryCov_9fa48("40", "41", "42", "43"), overIndex >= 0)) ? overIndex : newTaskIds.length;
            newTaskIds.splice(insertIndex, 0, activeId);
            return stryMutAct_9fa48("44") ? {} : (stryCov_9fa48("44"), {
              ...col,
              taskIds: newTaskIds
            });
          }
        }
        return col;
      }
    });
    return stryMutAct_9fa48("45") ? {} : (stryCov_9fa48("45"), {
      ...state,
      columns: newColumns
    });
  }
};